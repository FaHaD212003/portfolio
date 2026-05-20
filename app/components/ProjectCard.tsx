'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export type { Project };

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderRadius: '20px',
          background: 'rgba(10, 10, 18, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'default',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        whileHover={{
          borderColor: 'rgba(0,245,255,0.35)',
          boxShadow: '0 0 32px rgba(0,245,255,0.1), 0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Cyan top border accent */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)',
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Mouse glow highlight */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(0,245,255,0.06) 0%, transparent 60%)`,
            pointerEvents: 'none',
            borderRadius: '20px',
          }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(0,245,255,0.12)',
              border: '1px solid rgba(0,245,255,0.3)',
              fontSize: '0.65rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
            }}
          >
            Featured
          </div>
        )}

        {/* Card content */}
        <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
          {/* Number */}
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)',
              color: 'rgba(0,245,255,0.4)',
              letterSpacing: '0.05em',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Title */}
          <div>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '4px',
              }}
            >
              {project.title}
            </h3>
            {project.subtitle && (
              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: '500',
                  opacity: 0.8,
                }}
              >
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '0', listStyle: 'none' }}>
            {project.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }}>›</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '3px 10px',
                  borderRadius: '6px',
                  background: 'rgba(0,245,255,0.06)',
                  border: '1px solid rgba(0,245,255,0.12)',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer link */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: '600',
                color: 'var(--accent-cyan)',
                textDecoration: 'none',
                paddingTop: '4px',
              }}
            >
              View Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
