# Deployment & Setup Guide

Complete step-by-step guide to deploy your portfolio website to production.

## 📋 Pre-Deployment Checklist

- [ ] All personal data updated in `/data/portfolio.ts`
- [ ] Environment variables configured in `.env.local`
- [ ] Email service set up (Gmail or Resend)
- [ ] Tested contact form locally
- [ ] Reviewed Privacy Policy and Terms of Service
- [ ] Tested on mobile devices
- [ ] Verified all links work correctly

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Clone the portfolio repository to a location:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository named `portfolio`
   - Do NOT initialize with README/license
   - Click "Create repository"

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/your-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Set Up Email Service

**Option A: Gmail (Free)**

1. Go to your Google Account: https://myaccount.google.com
2. Go to "Security" section
3. Enable 2-Step Verification (if not already enabled)
4. Scroll down to "App passwords" (only appears if 2FA is enabled)
5. Select "Mail" and "Windows Computer"
6. Google generates a 16-character password
7. Copy this password (remove spaces)
8. Save for later: this is your `GMAIL_PASSWORD`

**Option B: Resend (Recommended - Free up to 100 emails/day)**

1. Visit https://resend.com
2. Click "Get Started"
3. Sign up with your email
4. Verify your email
5. Go to API Keys section
6. Generate a new API key
7. Copy and save for later: this is your `RESEND_API_KEY`

### Step 3: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Repository:**
   - Click "New Project"
   - Find your `portfolio` repository
   - Click "Import"

3. **Configure Environment Variables:**
   - In the project settings, go to "Environment Variables"
   - Add these variables:

   **For Gmail:**
   ```
   GMAIL_USER = your-email@gmail.com
   GMAIL_PASSWORD = your-16-char-app-password
   CONTACT_EMAIL = realparth77@gmail.com
   NEXT_PUBLIC_SITE_URL = https://your-portfolio-vercel.vercel.app
   ```

   **For Resend:**
   ```
   RESEND_API_KEY = your-resend-api-key
   CONTACT_EMAIL = realparth77@gmail.com
   NEXT_PUBLIC_SITE_URL = https://your-portfolio-vercel.vercel.app
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete (~2-3 minutes)
   - You'll see "Congratulations! Your site is live"

5. **Get Your URL:**
   - Your site is now live at: `https://your-project-name.vercel.app`
   - Test the contact form to make sure email works

### Step 4: Optional - Add Custom Domain

If you want to purchase a custom domain (recommended):

1. **Purchase Domain:**
   - Cheap options: Namecheap, GoDaddy, Google Domains
   - Suggested: `.dev`, `.com`, `.io` TLDs
   - Budget: $8-15/year

2. **Connect to Vercel:**
   - Go to your Vercel project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `prathamesh.dev`)
   - Follow DNS configuration:
     - If registrar uses Vercel's nameservers: Copy nameservers from Vercel
     - If registrar supports custom CNAME: Add CNAME record pointing to Vercel
   - Wait 24-48 hours for DNS to propagate

3. **Verify SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - Check status in Domains section

### Step 5: Post-Deployment Testing

1. **Test Contact Form:**
   - Fill out the contact form on your live site
   - Verify you receive the email
   - Test spam/rate limiting (submit 6+ times quickly)

2. **Test Security Headers:**
   - Use Chrome DevTools → Network → Click page load → Headers
   - Verify these headers are present:
     - `X-Content-Type-Options: nosniff`
     - `X-Frame-Options: DENY`
     - `Content-Security-Policy: ...`

3. **Test Mobile Responsiveness:**
   - Open on mobile phone
   - Test navigation menu
   - Test all sections scroll correctly
   - Test contact form on mobile

4. **Test Theme Toggle:**
   - Click light/dark mode button
   - Verify theme persists after reload
   - Test on multiple browsers

5. **Check Analytics:**
   - Go to Vercel project → Analytics
   - Verify you see page views
   - Check visitor breakdown

## 🔄 Ongoing Maintenance

### Weekly
- Check for contact form submissions
- Test that the website is still accessible

### Monthly
- Review Vercel Analytics dashboard
- Check for any error logs
- Verify all links still work

### Quarterly
- Update portfolio content (new experience, skills, projects)
- Review and update Privacy Policy if needed
- Check for npm dependency updates:
  ```bash
  npm outdated
  npm update
  ```

### Yearly
- Renew domain registration
- Review security settings
- Audit contact form submissions
- Update education/certifications

## 📝 Updating Your Portfolio

### Update Content

Edit `/data/portfolio.ts` and add new:
- Experience
- Skills
- Projects

Example:
```typescript
{
  id: X,
  title: "New Job Title",
  company: "Company Name",
  period: "Start – Present",
  achievements: ["Achievement 1", "Achievement 2"],
  skills: ["Skill 1", "Skill 2"],
}
```

### Commit and Deploy

```bash
# Make your changes
git add .
git commit -m "Update portfolio with new experience"
git push origin main
```

Vercel automatically deploys on push!

## 🆘 Troubleshooting

### Contact Form Not Sending Emails

1. **Check environment variables:**
   - Vercel project → Settings → Environment Variables
   - Verify all variables are set correctly
   - Re-deploy if changed

2. **Test email service:**
   - For Gmail: Verify app password is correct
   - For Resend: Verify API key is correct
   - Check spam/junk folder for emails

3. **Check Vercel logs:**
   - Go to Deployments → Latest → Logs
   - Look for error messages

### Rate Limiting Too Strict

Edit environment variables:
```
RATE_LIMIT_REQUESTS=10  # Increase from 5 to 10
RATE_LIMIT_WINDOW=3600  # Keep 1 hour window
```

### Domain Not Working

1. Verify DNS propagation: https://dnschecker.org
2. Wait 24-48 hours for DNS to fully propagate
3. Check Vercel domain settings for errors

### Site Slow or Not Loading

1. Check Vercel Analytics for issues
2. Verify deployment completed successfully
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try different browser/device

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - Keep in `.gitignore`
2. **Rotate API keys quarterly** - For Resend/Gmail
3. **Monitor Vercel Analytics** - Check for suspicious activity
4. **Keep dependencies updated** - Run `npm update` monthly
5. **Review contact form submissions** - Watch for spam

## 📊 Monitoring

### Vercel Analytics Dashboard

Track:
- Page views and unique visitors
- Geographic distribution
- Device types (mobile/desktop)
- Bounce rate
- Time on page

### Email Metrics

Track:
- Emails delivered successfully
- Delivery time
- Whether you read emails

### Rate Limiting

Monitor:
- Number of form submissions per day
- Blocked requests due to rate limiting
- Suspicious IPs or patterns

## 🎯 Next Steps After Deployment

1. **Tell the world:**
   - Add portfolio link to LinkedIn profile
   - Share on social media
   - Email to recruiters

2. **Optimize for search:**
   - Submit sitemap to Google Search Console
   - Monitor for indexing issues
   - Check search rankings

3. **Gather feedback:**
   - Ask friends to test website
   - Check analytics for improvements
   - Update content based on feedback

---

**Happy deploying! 🚀**

For questions or issues, contact: realparth77@gmail.com
