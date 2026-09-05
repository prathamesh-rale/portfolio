'use client';

import { portfolioData } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1>
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.name}>{personal.name}</span>
            </h1>

            <p className={styles.title}>{personal.title}</p>

            <p className={styles.bio}>{personal.bio}</p>

            <div className={styles.cta}>
              <button
                className={styles.primaryBtn}
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </button>
              <a
                href="https://www.linkedin.com/in/prathamesh-rale/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                View LinkedIn Profile
              </a>
            </div>

            <div className={styles.contact}>
              <p>
                📧 <a href="mailto:realparth77@gmail.com">realparth77@gmail.com</a>
              </p>
              <p>
                📱 <a href="tel:+16479383124">+1 647 938 3124</a>
              </p>
              <p>📍 {personal.location}</p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.avatar}>
              <div className={styles.avatarContent}>
                <span>💼</span>
              </div>
            </div>
            <div className={styles.decoration}></div>
          </div>
        </div>

        <div className={styles.scroll}>
          <p>Scroll to explore</p>
          <div className={styles.arrow}>↓</div>
        </div>
      </div>
    </section>
  );
}
