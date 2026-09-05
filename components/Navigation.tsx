'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>PR</span> Prathamesh Rale
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={styles.navLink}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className={styles.navLink}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className={styles.navLink}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={styles.navLink}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={styles.navLink}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
