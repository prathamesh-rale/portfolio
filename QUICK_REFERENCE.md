# Quick Reference Guide

Fast reference for common tasks and updates.

## 📝 Update Portfolio Data

**File:** `/data/portfolio.ts`

### Add New Work Experience
```typescript
{
  id: 4,
  title: "New Job Title",
  company: "Company Name",
  period: "Jan 2024 – Present",
  location: "City, Country",
  description: "Brief description",
  achievements: [
    "Achievement 1",
    "Achievement 2",
  ],
  skills: ["Skill1", "Skill2"],
}
```

### Add New Skill
```typescript
"Category Name": [
  { name: "Skill Name", proficiency: 85 },
]
```

### Add New Project
```typescript
{
  id: 6,
  title: "Project Name",
  description: "Description",
  technologies: ["Tech1", "Tech2"],
  highlights: [
    "Highlight 1",
    "Highlight 2",
  ],
}
```

### Add Education
```typescript
{
  degree: "Degree Name",
  institution: "Institution Name",
  year: "Aug 2020 – May 2024",
}
```

## 🎨 Customize Styling

### Change Primary Colors

**File:** `/styles/globals.css`

Find these lines (lines ~1-15):
```css
:root {
  --accent-primary: #6366f1;      /* Change this */
  --accent-secondary: #8b5cf6;    /* Change this */
  /* ... other colors ... */
}
```

**Color Suggestions:**
- Professional: `#0066cc` (blue), `#003366` (dark blue)
- Tech: `#00ff00` (green), `#00cc00` (darker green)
- Creative: `#ff6b6b` (red), `#ff4444` (darker red)
- Elegant: `#9333ea` (purple), `#7e22ce` (darker purple)

### Change Font Size
```css
h1 {
  font-size: 2.5rem;  /* Change this */
}
```

### Adjust Spacing
```css
.section {
  margin: 4rem 0;  /* Change this */
  padding: 2rem;   /* Change this */
}
```

## 🚀 Deploy Changes

After editing files:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update portfolio with new experience"

# Push to GitHub (Vercel auto-deploys)
git push origin main
```

**Note:** Deployment takes 1-3 minutes. Check Vercel dashboard for status.

## 📧 Change Email Configuration

**File:** `.env.local`

### Switch from Gmail to Resend
```bash
# Remove these
GMAIL_USER=...
GMAIL_PASSWORD=...

# Add this
RESEND_API_KEY=your-key-here
```

**Then:**
1. Update in Vercel project settings
2. Redeploy project

## 📱 Update Contact Information

**File:** `/data/portfolio.ts` (personal section)

```typescript
personal: {
  email: "your-email@example.com",        // Change this
  phone: "+1 234 567 8900",              // Change this
  location: "City, Country",             // Change this
}
```

**Also update:**
- `/app/layout.tsx` - Meta tags
- `/components/Hero.tsx` - Contact links
- `/components/Footer.tsx` - Footer links
- `/components/ContactForm.tsx` - Default email

## 🔐 Update Privacy Policy/Terms

**Files:**
- `/app/privacy/page.tsx` - Privacy Policy
- `/app/terms/page.tsx` - Terms of Service

Find sections marked with `<h2>` tags and update content accordingly.

## 📊 Check Website Performance

1. **Analytics Dashboard:**
   - Go to Vercel project → Analytics
   - View visitor stats, popular pages, geography

2. **Performance Score:**
   - Use Google PageSpeed Insights
   - Enter your domain
   - Get performance recommendations

3. **Check Mobile Responsiveness:**
   - Use Mobile-Friendly Test
   - Enter your domain

## 🐛 Common Issues & Fixes

### "Contact form not sending emails"

1. **Check environment variables:**
   ```bash
   cat .env.local  # On your computer
   ```

2. **Verify in Vercel:**
   - Project → Settings → Environment Variables
   - Make sure all variables are there

3. **Test email service:**
   - For Gmail: Open account, check app passwords
   - For Resend: Open resend.com, verify API key

### "Website looks different on mobile"

1. **Test in browser DevTools:**
   - Press F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Try different screen sizes

2. **Check CSS:**
   - Look in component `.module.css` files
   - Check `@media` queries

### "Changes not showing after deploy"

1. **Verify push worked:**
   ```bash
   git log --oneline  # See latest commits
   ```

2. **Check Vercel deployment:**
   - Go to Vercel project → Deployments
   - Look for latest deployment status

3. **Clear browser cache:**
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)

### "Rate limiting blocking contacts"

Increase in `.env.local`:
```
RATE_LIMIT_REQUESTS=10  # Up from 5
```

## 🔗 Quick Links

- **GitHub Repo**: https://github.com/yourusername/portfolio
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Resend Console**: https://resend.com
- **Google Domains**: https://domains.google.com
- **Namecheap**: https://www.namecheap.com
- **PageSpeed Insights**: https://pagespeed.web.dev

## 📞 When You Need Help

1. **Check logs:**
   ```bash
   npm run build  # Local testing
   npm run dev    # Development server
   ```

2. **Vercel Logs:**
   - Project → Deployments → Latest → Logs

3. **Browser Console:**
   - F12 → Console tab
   - Look for error messages

4. **Email Support:**
   - realparth77@gmail.com

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] All content updated
- [ ] Contact form tested and working
- [ ] Mobile version tested
- [ ] Theme toggle working (light/dark)
- [ ] All links clickable and working
- [ ] Privacy Policy and Terms reviewed
- [ ] Email configured correctly
- [ ] Domain purchased (if custom domain)
- [ ] Analytics working
- [ ] No browser console errors
- [ ] Performance tested (PageSpeed)

## 🎯 Monthly Maintenance

- **Week 1**: Check analytics, review contact emails
- **Week 2**: Test contact form functionality
- **Week 3**: Check for npm updates (`npm outdated`)
- **Week 4**: Review and update portfolio content

---

**Last Updated:** {new Date().toLocaleDateString()}

**Next Action**: Read DEPLOYMENT.md for detailed setup instructions!
