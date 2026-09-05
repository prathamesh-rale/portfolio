// Simple in-memory rate limiter
// For production, consider using Redis or a service like Upstash

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export function rateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowSeconds: number = 3600
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Check if entry exists and is still valid
  if (entry && entry.resetTime > now) {
    if (entry.count >= maxRequests) {
      return {
        success: false,
        remaining: 0,
        resetTime: entry.resetTime,
      };
    }
    entry.count++;
    return {
      success: true,
      remaining: maxRequests - entry.count,
      resetTime: entry.resetTime,
    };
  }

  // Create new entry or reset expired one
  const resetTime = now + windowSeconds * 1000;
  rateLimitStore.set(identifier, {
    count: 1,
    resetTime,
  });

  // Cleanup old entries (every 100 requests)
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetTime <= now) {
        rateLimitStore.delete(key);
      }
    }
  }

  return {
    success: true,
    remaining: maxRequests - 1,
    resetTime,
  };
}

// Get client IP address for rate limiting
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded
    ? forwarded.split(',')[0].trim()
    : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}
