'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'skills', 'projects', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(5, 5, 8, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0, 245, 255, 0.08)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('#hero')}
          whileHover={{ scale: 1.03 }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px var(--accent-cyan-glow)',
              fontFamily: 'var(--font-mono)',
              fontWeight: '900',
              fontSize: '1rem',
              color: '#000',
              letterSpacing: '-0.05em',
            }}
          >
            FS
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: '700',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Fahad Sohail
          </span>
        </motion.button>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                whileHover={{ y: -1 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      background: 'var(--accent-cyan)',
                      borderRadius: '1px',
                      boxShadow: '0 0 8px var(--accent-cyan)',
                    }}
                  />
                )}
              </motion.button>
            );
          })}

          <motion.a
            href="mailto:fahadsohail133@gmail.com"
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            style={{
              marginLeft: '8px',
              padding: '9px 20px',
              fontSize: '0.85rem',
            }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle mobile menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--accent-cyan)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform:
                  mobileOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : mobileOpen && i === 1
                    ? 'scaleX(0)'
                    : mobileOpen && i === 2
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(5, 5, 8, 0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border-cyan)',
              padding: '20px 24px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color:
                    activeSection === link.href.replace('#', '')
                      ? 'var(--accent-cyan)'
                      : 'var(--text-primary)',
                  textAlign: 'left',
                  fontFamily: 'var(--font-sans)',
                  borderLeft:
                    activeSection === link.href.replace('#', '')
                      ? '3px solid var(--accent-cyan)'
                      : '3px solid transparent',
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
