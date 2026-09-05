'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const { personal } = portfolioData;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} ${isLoaded ? styles.loaded : ''}`}>
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
            <div className={`${styles.avatar} ${isLoaded ? styles.loaded : ''}`}>
              <div className={styles.avatarContent}>
                <span>💼</span>
              </div>
            </div>
            <div className={styles.decoration}></div>
            <div className={styles.particles}>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={styles.particle}
                  style={{
                    '--delay': `${i * 0.1}s`,
