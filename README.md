# Prathamesh Rale Portfolio Website

A professional, modern portfolio website built with Next.js, TypeScript, and React. Features a dark theme, responsive design, contact form, and comprehensive security compliance for 2026.

## 🌟 Features

- **Modern Design**: Dark theme with light mode toggle, gradient accents
- **Responsive**: Mobile-first responsive design
- **Contact Form**: Secure form with validation, rate limiting, and email integration
- **Security First**: 
  - Content Security Policy (CSP)
  - HTTPS/TLS 1.3
  - Input validation and sanitization
  - Rate limiting (5 requests/hour default)
  - GDPR & CCPA compliant
  - Privacy Policy & Terms of Service
- **Analytics**: Vercel Analytics (privacy-friendly, no cookie consent needed)
- **SEO Optimized**: Meta tags, structured data, Open Graph
- **Accessibility**: WCAG 2.1 compliant, semantic HTML, ARIA labels
- **Performance**: Optimized images, code splitting, fast load times

## 📋 Sections

1. **Hero/About**: Introduction and quick contact methods
2. **Experience**: Timeline with expandable work history
3. **Skills**: Categorized skills with proficiency visualization
4. **Projects**: Featured projects with highlights
5. **Contact**: Secure contact form with email integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your configuration:

   **Option A: Using Gmail**
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-app-specific-password
   CONTACT_EMAIL=realparth77@gmail.com
   ```

   **Option B: Using Resend (Recommended)**
   ```
   RESEND_API_KEY=your-resend-api-key
   CONTACT_EMAIL=realparth77@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Email Setup

**Gmail Setup:**
1. Enable 2-Factor Authentication on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords)
3. Add the app password to `.env.local`

**Resend Setup (Recommended):**
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`

### Rate Limiting

Default: 5 requests per hour per IP. Configure in `.env.local`:
```
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_WINDOW=3600
```

### Analytics

Vercel Analytics is automatically enabled. No setup required.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Contact form endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── privacy/page.tsx          # Privacy policy
│   └── terms/page.tsx            # Terms of service
├── components/
│   ├── Hero.tsx                  # Hero section
│   ├── Experience.tsx            # Experience timeline
│   ├── Skills.tsx                # Skills section
│   ├── Projects.tsx              # Projects showcase
│   ├── ContactForm.tsx           # Contact form
│   ├── Navigation.tsx            # Navigation bar
│   ├── Footer.tsx                # Footer
│   ├── ThemeProvider.tsx         # Theme toggle logic
│   └── *.module.css              # Component styles
├── data/
│   └── portfolio.ts              # Portfolio content data
├── lib/
│   ├── validation.ts             # Form validation schemas
│   ├── email.ts                  # Email sending utility
│   └── rateLimit.ts              # Rate limiting logic
├── styles/
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

```

## 🔐 Security Features

### Built-in Security Headers
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-Frame-Options**: Clickjacking protection
- **X-XSS-Protection**: XSS attack prevention
- **Content-Security-Policy**: Restricts resource loading
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

### Input Validation
- Zod schema validation on all form inputs
- Regex pattern matching for safe content
- Max/min length restrictions
- Email format validation

### API Security
- Rate limiting per IP address
- CORS protection
- Secure email transmission
- No sensitive data in responses
- Safe error messaging (no information disclosure)

### Data Protection
- HTTPS/TLS 1.3 encryption
- GDPR/CCPA compliant
- Privacy Policy & Terms of Service
- User data retention policies
- Right to deletion support

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in project settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to project settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Environment Variables for Production
Set these in Vercel project settings:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=realparth77@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_WINDOW=3600
```

## 🎨 Customization

### Update Portfolio Data
Edit `/data/portfolio.ts` to update:
- Personal information
- Work experience
- Skills and proficiency levels
- Projects
- Education
- Awards

### Modify Styling
- Global styles: `/styles/globals.css`
- Component styles: `{ComponentName}.module.css`
- CSS Variables:
  - Light mode: root
  - Dark mode: [data-theme="dark"]

### Change Content
All content sections are in:
- `/components/` - React components
- `/data/portfolio.ts` - Data content
- `/app/privacy/page.tsx` - Privacy Policy
- `/app/terms/page.tsx` - Terms of Service

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic per route
- **CSS Modules**: Scoped styling, zero runtime CSS
- **Lazy Loading**: Components load on demand
- **Minification**: Automatic production build
- **Analytics**: Lightweight Vercel Analytics

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Color contrast ratios (WCAG AAA)
- Screen reader friendly
- Focus management

## 📱 Mobile Responsive

- Mobile-first design
- Hamburger navigation menu
- Touch-friendly buttons
- Optimized font sizes
- Flexible grid layouts
- Tested on common devices

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## 📝 License

This portfolio is personal property. Unauthorized copying or modification is not permitted.

## 📞 Support

For issues or questions:
- Email: realparth77@gmail.com
- Phone: +1 647 938 3124
- LinkedIn: https://www.linkedin.com/in/prathamesh-rale/

## 🔄 Keeping Updated

To keep your portfolio updated:

1. **Content Updates**
   - Edit `/data/portfolio.ts` for experience, skills, projects
   - Deploy via Git push to Vercel

2. **Dependency Updates**
   ```bash
   npm update
   npm run build
   git push
   ```

3. **Security Updates**
   - Regularly check for security patches
   - Review environment variables quarterly

---

**Built with ❤️ using Next.js, TypeScript, and React**

**Last Updated:** {new Date().toLocaleDateString()}
