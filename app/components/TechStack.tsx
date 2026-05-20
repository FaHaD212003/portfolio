'use client';

import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFastapi, SiNodedotjs,
  SiPostgresql, SiSupabase, SiGit,
  SiPandas, SiScikitlearn, SiApachespark, SiJupyter,
  SiGooglegemini,
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaComments } from 'react-icons/fa';
import { VscTerminalPowershell } from 'react-icons/vsc';

interface Skill {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', Icon: FaDatabase, color: '#f29111' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    label: 'AI & Data',
    skills: [
      { name: 'Machine Learning', Icon: FaBrain, color: '#00f5ff' },
      { name: 'Deep Learning', Icon: FaBrain, color: '#ff6b6b' },
      { name: 'NLP', Icon: FaComments, color: '#a78bfa' },
      { name: 'PySpark', Icon: SiApachespark, color: '#E25A1C' },
      { name: 'Pandas', Icon: SiPandas, color: '#150458' },
      { name: 'Scikit-learn', Icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Jupyter', Icon: SiJupyter, color: '#F37626' },
    ],
  },
  {
    label: 'Web & Backend',
    skills: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    label: 'Tools & Databases',
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Gemini API', Icon: SiGooglegemini, color: '#00f5ff' },
      { name: 'Prompt Eng.', Icon: VscTerminalPowershell, color: '#a78bfa' },
    ],
  },
];

// Flatten all skills for the marquee
const allSkills = skillGroups.flatMap((g) => g.skills);

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.05 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 18px',
        borderRadius: '12px',
        background: 'rgba(13, 13, 24, 0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        whiteSpace: 'nowrap',
        cursor: 'default',
        transition: 'border-color 0.3s',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.3)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,245,255,0.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <skill.Icon
        style={{ fontSize: '20px', color: skill.color, flexShrink: 0 }}
      />
      <span
        style={{
          fontSize: '0.85rem',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          letterSpacing: '0.01em',
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={reverse ? 'marquee-track animate-marquee-right' : 'marquee-track animate-marquee-left'}
        style={{ gap: '12px' }}
      >
        {doubled.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="skills"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,245,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        {/* Section header */}
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
            Technical Expertise
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
            Skills &amp; Tech Stack
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
            A curated set of tools and technologies I use to build scalable,
            data-driven applications and intelligent systems.
          </p>
        </motion.div>

        {/* Skill groups grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card"
              style={{ padding: '20px' }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '16px',
                }}
              >
                {group.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <skill.Icon
                      style={{
                        fontSize: '18px',
                        color: skill.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        fontWeight: '500',
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <MarqueeRow skills={allSkills} />
        <MarqueeRow skills={[...allSkills].reverse()} reverse />
      </div>
    </section>
  );
}
