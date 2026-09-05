import nodemailer from 'nodemailer';

// Configure email transporter based on environment
export async function getEmailTransporter() {
  // If using Resend API
  if (process.env.RESEND_API_KEY) {
    // Note: Resend would require their specific SDK
    // This is a placeholder for direct SMTP approach
    console.log('Using Resend API for emails');
  }

  // Using Gmail or standard SMTP
  if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, // Use app-specific password
      },
    });
    return transporter;
  }

  // Fallback transporter (development)
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
  });

  return transporter;
}

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Send contact form email
export async function sendContactEmail(data: EmailData) {
  try {
    const transporter = await getEmailTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER || 'noreply@portfolio.local',
      to: process.env.CONTACT_EMAIL || 'realparth77@gmail.com',
      subject: `New Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <p><strong>From:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(data.message)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio website contact form.
            <br>Timestamp: ${new Date().toISOString()}
          </p>
        </div>
      `,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}

// Escape HTML to prevent XSS in email template
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
