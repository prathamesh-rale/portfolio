'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmissionState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submission, setSubmission] = useState<SubmissionState>({
    status: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmission({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      setSubmission({
        status: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmission({ status: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setSubmission({
        status: 'error',
        message: errorMessage,
      });
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a question or opportunity? I'd love to hear from you.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <a href="mailto:realparth77@gmail.com">realparth77@gmail.com</a>
            </div>

            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <a href="tel:+16479383124">+1 647 938 3124</a>
            </div>

            <div className={styles.infoItem}>
              <h3>Location</h3>
              <p>Toronto, Ontario, Canada</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Connect</h3>
              <a
                href="https://www.linkedin.com/in/prathamesh-rale/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                minLength={5}
                maxLength={200}
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                aria-required="true"
              />
            </div>

            {submission.message && (
              <div
                className={`${styles.message} ${styles[submission.status]}`}
                role="alert"
              >
                {submission.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submission.status === 'loading'}
              className={styles.submitButton}
            >
              {submission.status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <p className={styles.disclaimer}>
              We respect your privacy. Your information will never be shared with
              third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
