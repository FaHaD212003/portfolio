'use client';

import { motion } from 'framer-motion';
import ProjectCard, { type Project } from './ProjectCard';

const projects: Project[] = [
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'E-Commerce Big Data Analytics Platform',
    description:
      'A scalable big data analytics platform that processes and visualizes e-commerce datasets using distributed computing paradigms.',
    highlights: [
      'Engineered scalable backend data pipelines using Apache Spark for map, clean, and analyze workflows',
      'Built a FastAPI REST backend with async endpoints for data retrieval and analytics',
      'Implemented Google OAuth 2.0 for secure authentication',
      'Developed a responsive React dashboard for real-time analytics visualization',
    ],
    tags: ['Python', 'Apache Spark', 'FastAPI', 'React', 'Google OAuth'],
    featured: true,
  },
  {
    id: 'ecommerce-fyp',
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'Final Year Project — Headless Storefront',
    description:
      'A modern headless e-commerce storefront integrating the Shopify Storefront API with a custom Next.js frontend, delivering a seamless shopping experience.',
    highlights: [
      'Built a headless storefront consuming Shopify Storefront API (GraphQL)',
      'Implemented dynamic product filtering, search, and collection browsing',
      'Secure user authentication and session management with TypeScript type safety',
      'Fully responsive UI with optimized image loading via Next.js Image component',
    ],
    tags: ['Next.js', 'TypeScript', 'Shopify API', 'GraphQL', 'Tailwind'],
    featured: true,
  },
  {
    id: 'etl-pipeline',
    title: 'E-Commerce ETL Data Pipeline',
    subtitle: 'Large-Scale Data Engineering',
    description:
      'A robust ETL pipeline that ingests, cleanses, and transforms large-scale e-commerce datasets, generating comprehensive analytical reports.',
    highlights: [
      'Ingested and cleaned large-scale Kaggle datasets using PySpark distributed processing',
      'Applied schema inference, null handling, and type coercion transformations',
      'Generated analytical charts and statistical summaries via Jupyter Notebooks',
      'Designed reusable transformation modules for scalable data workflows',
    ],
    tags: ['Python', 'PySpark', 'Pandas', 'Jupyter', 'ETL'],
  },
  {
    id: 'gemini-chat',
    title: 'Generative AI Chat Interface',
    subtitle: 'Real-Time AI Conversations',
    description:
      'A polished chat interface replicating the Google Gemini UX, powered by the Gemini API for real-time AI-driven natural language conversations.',
    highlights: [
      'Integrated Google Gemini API for real-time streaming AI responses',
      'Built a fully responsive chat UI with message threading and history',
      'Implemented natural language processing features including context retention',
      'Designed smooth typing indicators and progressive message rendering',
    ],
    tags: ['React', 'Gemini API', 'NLP', 'JavaScript', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.015) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '72px' }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            What I've Built
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}
            className="cyan-line"
          >
            Featured Projects
          </h2>
          <p
            style={{
              marginTop: '20px',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            A selection of projects spanning data engineering, machine learning,
            and full-stack web development — each built to solve real problems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '24px',
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
