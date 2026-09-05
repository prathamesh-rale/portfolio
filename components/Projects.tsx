'use client';

import { portfolioData } from '@/data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2>Featured Projects</h2>
        <p className={styles.subtitle}>
          Key projects showcasing technical expertise and impact
        </p>

        <div className={styles.grid}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {project.highlights.length > 0 && (
                  <div className={styles.highlights}>
                    <h4>Key Highlights</h4>
                    <ul>
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.technologies}>
                  <h4>Technologies</h4>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
