'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import to prevent SSR issues with Three.js
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => null,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── LAYER 0: Full-section 3D background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </motion.div>

      {/* ── LAYER 1: Subtle gradient veil so text stays legible ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(90deg, rgba(5,5,8,0.82) 0%, rgba(5,5,8,0.55) 50%, rgba(5,5,8,0.15) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── LAYER 2: Grid pattern ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 30% 50%, black 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 30% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* ── LAYER 3: Text content ── */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '120px 24px 80px',
          width: '100%',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            maxWidth: '580px',
          }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 245, 255, 0.08)',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                fontSize: '0.78rem',
                fontWeight: '600',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 6px var(--accent-cyan)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              Available for Work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} style={{ lineHeight: 1 }}>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: '900',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'var(--text-primary)',
              }}
            >
              Fahad
              <br />
              <span className="text-gradient-cyan">Sohail</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              letterSpacing: '0.01em',
              lineHeight: 1.5,
              maxWidth: '480px',
            }}
          >
            Computer Science Graduate &nbsp;·&nbsp;{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>Data Analysis</span>,{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>Machine Learning</span>{' '}
            &amp; Full-Stack Development.
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: '460px',
            }}
          >
            I build scalable data pipelines and full-stack applications using
            Python, Next.js, and FastAPI. Transforming complex data into
            actionable insights through rigorous analysis and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.a
              href="mailto:fahadsohail133@gmail.com"
              className="btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Decorative rings (centred in viewport) ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 245, 255, 0.06)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 245, 255, 0.03)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 2,
        }}
        onClick={() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Scroll
        </span>
        <div className="animate-bounce-y">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-cyan)"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
