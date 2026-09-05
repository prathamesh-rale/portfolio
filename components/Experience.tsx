'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import styles from './Experience.module.css';

interface ExperienceItemProps {
  experience: typeof portfolioData.experience[0];
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.experienceItem}>
      <div className={styles.timeline}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.header}
          aria-expanded={isExpanded}
        >
          <div>
            <h3>{experience.title}</h3>
            <p className={styles.company}>{experience.company}</p>
            <p className={styles.period}>{experience.period}</p>
          </div>
          <span className={`${styles.icon} ${isExpanded ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>

        <div className={`${styles.details} ${isExpanded ? styles.show : ''}`}>
          <p className={styles.description}>{experience.description}</p>

          {experience.achievements.length > 0 && (
            <div className={styles.achievements}>
              <h4>Key Achievements</h4>
              <ul>
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {experience.skills.length > 0 && (
            <div className={styles.skillsTags}>
              <h4>Skills Used</h4>
              <div className={styles.tags}>
                {experience.skills.map((skill, index) => (
                  <span key={index} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2>Professional Experience</h2>
        <p className={styles.subtitle}>
          6+ years building integrations and solving complex technical challenges
        </p>

        <div className={styles.timeline}>
          {portfolioData.experience.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
