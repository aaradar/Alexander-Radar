import React, { useState } from 'react'
import { projects, Project } from './projects.data'
import './Projects.scss'

type Filter = 'all' | 'solo' | 'group' | 'work'

const categoryLabel: Record<string, string> = {
  solo: 'Personal',
  group: 'Team',
  work: 'Industry',
}

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="project-card">
    <div className="project-card__header">
      <span className={`project-card__badge project-card__badge--${project.category}`}>
        {categoryLabel[project.category]}
      </span>
      <div className="project-card__actions">
        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
          <GithubIcon />
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
            <ExternalIcon />
          </a>
        )}
      </div>
    </div>

    <h3 className="project-card__title">{project.title}</h3>
    <p className="project-card__desc">{project.description}</p>

    <ul className="project-card__bullets">
      {project.bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>

    <div className="project-card__tags">
      {project.tags.map(tag => (
        <span key={tag} className="project-card__tag">{tag}</span>
      ))}
    </div>

    <div className="project-card__footer">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__cta">
        View on GitHub <ExternalIcon />
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__cta project-card__cta--live">
          gh-pages <ExternalIcon />
        </a>
      )}
    </div>
  </article>
)

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filters: Filter[] = ['all', 'solo', 'group', 'work']

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="work" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">// projects &amp; experience</span>
          <h2 className="section-header__title">
            Things I've <span className="accent">Built</span>
          </h2>
          <p className="section-header__sub">
            A mix of personal projects, academic team work, and industry experience —
            from web apps to satellite imagery pipelines.
          </p>
        </div>

        <div className="projects__filters">
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : categoryLabel[f]}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
