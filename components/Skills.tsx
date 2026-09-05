'use client';

import { portfolioData } from '@/data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const skillCategories = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2>Technical Skills & Expertise</h2>
        <p className={styles.subtitle}>
          Proficiency levels based on hands-on experience and active usage
        </p>

        <div className={styles.grid}>
          {skillCategories.map(([category, skills]) => (
            <div key={category} className={styles.skillCategory}>
              <h3>{category}</h3>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.proficiency}%</span>
                    </div>
                    <div className={styles.proficiencyBar}>
                      <div
                        className={styles.proficiencyFill}
                        style={{
                          width: `${skill.proficiency}%`,
                          background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`,
                        }}
                        aria-valuenow={skill.proficiency}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <h4>Proficiency Scale</h4>
          <div className={styles.legendItems}>
            <div className={styles.legendItem}>
              <span className={styles.bar} style={{ width: '80px' }}></span>
              <span>80%+: Expert / Daily Use</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.bar} style={{ width: '60px' }}></span>
              <span>60-79%: Intermediate / Regular Use</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.bar} style={{ width: '40px' }}></span>
              <span>40-59%: Familiar / Occasional Use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
