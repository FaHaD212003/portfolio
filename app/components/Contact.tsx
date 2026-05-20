'use client';

import { motion } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaLinkedin, FaGithub,
} from 'react-icons/fa';

interface ContactItem {
  id: string;
  Icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
}

const contactItems: ContactItem[] = [
  {
    id: 'phone',
    Icon: FaPhone,
    label: 'Phone',
    value: '03039965760',
    href: 'tel:+923039965760',
    color: '#00f5ff',
  },
  {
    id: 'email',
    Icon: FaEnvelope,
    label: 'Email',
    value: 'fahadsohail133@gmail.com',
    href: 'mailto:fahadsohail133@gmail.com',
    color: '#ff6b6b',
  },
  {
    id: 'linkedin',
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/fahad-sohail/',
    color: '#0A66C2',
  },
  {
    id: 'github',
    Icon: FaGithub,
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/fahadsohail',
    color: '#ffffff',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(0,245,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top border line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Let's build something{' '}
            <span className="text-gradient-cyan">impactful.</span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to say hello — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto 56px',
          }}
        >
          {contactItems.map((item, i) => (
            <motion.a
              key={item.id}
              id={`contact-${item.id}`}
              href={item.href}
              target={item.id === 'linkedin' || item.id === 'github' ? '_blank' : undefined}
              rel={item.id === 'linkedin' || item.id === 'github' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                padding: '28px 20px',
                borderRadius: '20px',
                background: 'rgba(10, 10, 18, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${item.color}40`;
                el.style.boxShadow = `0 0 24px ${item.color}18, 0 16px 48px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <item.Icon style={{ fontSize: '22px', color: item.color }} />
              </div>

              {/* Label */}
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.a
            href="mailto:fahadsohail133@gmail.com"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: '1rem', padding: '14px 36px' }}
          >
            <FaEnvelope />
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Copyright */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '6px',
                background: 'var(--accent-cyan)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: '900',
                color: '#000',
                fontFamily: 'var(--font-mono)',
              }}
            >
              FS
            </span>
            © {new Date().getFullYear()} Fahad Sohail. All rights reserved.
          </div>

          {/* Social icons row */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {[
              { Icon: FaGithub, href: 'https://github.com/fahadsohail', label: 'GitHub', color: '#ffffff' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/fahad-sohail/', label: 'LinkedIn', color: '#0A66C2' },
              { Icon: FaEnvelope, href: 'mailto:fahadsohail133@gmail.com', label: 'Email', color: '#00f5ff' },
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.2, color }}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '18px',
                  transition: 'color 0.2s',
                  display: 'flex',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
