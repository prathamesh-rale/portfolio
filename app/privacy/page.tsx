export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 2rem' }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy describes how Prathamesh Rale ("we," "our," or "us")
        collects, uses, and discloses personal information through this website.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Contact Form Information</h3>
      <p>When you submit the contact form, we collect:</p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Message subject</li>
        <li>Message content</li>
      </ul>

      <h3>Analytics Data</h3>
      <p>
        We use Vercel Analytics to understand how visitors interact with our
        site. This includes:
      </p>
      <ul>
        <li>Page views and interactions</li>
        <li>Time spent on pages</li>
        <li>Device and browser information</li>
        <li>Approximate location (country/region level)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to your inquiries</li>
        <li>Send you relevant communications</li>
        <li>Improve website performance and user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal
        information, including:
      </p>
      <ul>
        <li>HTTPS/TLS encryption for all data in transit</li>
        <li>Secure email transmission</li>
        <li>Limited access to personal data</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        Contact form submissions are retained only as long as necessary to
        respond to your inquiry. You may request deletion of your data at any
        time by contacting us.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        We use the following third-party services, which have their own privacy
        policies:
      </p>
      <ul>
        <li>Vercel (hosting and analytics)</li>
        <li>Email service provider (Gmail/Resend)</li>
      </ul>

      <h2>7. Your Rights (GDPR & CCPA Compliance)</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
        <li>Object to processing of your information</li>
        <li>Export your data in a portable format</li>
      </ul>

      <p>
        To exercise these rights, please contact us at{' '}
        <a href="mailto:realparth77@gmail.com">realparth77@gmail.com</a>.
      </p>

      <h2>8. Cookies</h2>
      <p>
        We use minimal cookies. Only the theme preference (light/dark mode) is
        stored locally in your browser using localStorage, not shared with
        servers.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        effective immediately upon posting to the website.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:realparth77@gmail.com">realparth77@gmail.com</a>
        </li>
        <li>Phone: +1 647 938 3124</li>
        <li>Location: Toronto, Ontario, Canada</li>
      </ul>

      <p style={{ marginTop: '3rem', color: 'var(--text-secondary)' }}>
        By using this website, you agree to the terms of this Privacy Policy.
      </p>
    </div>
  );
}
