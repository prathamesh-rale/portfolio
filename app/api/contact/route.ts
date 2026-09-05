import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

// POST handler for contact form
export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(
      clientIp,
      parseInt(process.env.RATE_LIMIT_REQUESTS || '5', 10),
      parseInt(process.env.RATE_LIMIT_WINDOW || '3600', 10)
    );

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil(
            (rateLimitResult.resetTime - Date.now()) / 1000
          ),
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (rateLimitResult.resetTime - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten();
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: errors.fieldErrors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Send email
    try {
      await sendContactEmail(formData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log but don't expose email service errors to client
      return NextResponse.json(
        {
          error: 'Failed to send message. Please try again later.',
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Generic error response to avoid information disclosure
    return NextResponse.json(
      {
        error: 'An error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'POST, OPTIONS',
    },
  });
}

// Explicitly disallow other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
