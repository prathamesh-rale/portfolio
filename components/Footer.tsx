'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Prathamesh Rale</h3>
            <p>Senior Solutions Consultant</p>
            <p>Specialized in HR/Payroll Integrations & AI-Driven Automation</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:realparth77@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prathamesh-rale/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+16479383124">+1 647 938 3124</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Prathamesh Rale. All rights reserved.</p>
          <p>Built with Next.js | Hosted on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
