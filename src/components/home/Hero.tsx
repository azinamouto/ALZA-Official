import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageRoute } from '../../types';
import { MagneticButton } from '../common/MagneticButton';
import { useTheme } from '../../context/ThemeContext';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onExploreWork: () => void;
}

interface Particle {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // px
  opacity: number;
  speed: number;
  parallaxFactor: number;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onExploreWork }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [cursor, setCursor] = useState({ x: 0, y: 0, pxX: 0, pxY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Sparse, quiet cosmic micro-particles that float with anti-gravity drift
  const particles: Particle[] = [
    { id: 1, x: 14, y: 20, size: 2, opacity: 0.28, speed: 12, parallaxFactor: 0.03 },
    { id: 2, x: 32, y: 14, size: 1.5, opacity: 0.2, speed: 15, parallaxFactor: 0.05 },
    { id: 3, x: 78, y: 24, size: 2.5, opacity: 0.32, speed: 11, parallaxFactor: 0.04 },
    { id: 4, x: 68, y: 58, size: 1.5, opacity: 0.24, speed: 14, parallaxFactor: 0.06 },
    { id: 5, x: 22, y: 68, size: 2, opacity: 0.26, speed: 13, parallaxFactor: 0.04 },
    { id: 6, x: 48, y: 32, size: 1.5, opacity: 0.18, speed: 16, parallaxFactor: 0.02 },
    { id: 7, x: 88, y: 18, size: 2, opacity: 0.25, speed: 10, parallaxFactor: 0.05 },
    { id: 8, x: 84, y: 76, size: 1.5, opacity: 0.22, speed: 15, parallaxFactor: 0.03 },
    { id: 9, x: 38, y: 84, size: 2, opacity: 0.22, speed: 12, parallaxFactor: 0.04 },
    { id: 10, x: 92, y: 44, size: 1.5, opacity: 0.26, speed: 13, parallaxFactor: 0.05 },
    { id: 11, x: 8, y: 52, size: 2, opacity: 0.22, speed: 14, parallaxFactor: 0.03 },
    { id: 12, x: 56, y: 72, size: 1.5, opacity: 0.18, speed: 17, parallaxFactor: 0.02 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const pxY = e.clientY - rect.top;
    const normX = ((pxX / rect.width) - 0.5) * 2; // -1 to 1
    const normY = ((pxY / rect.height) - 0.5) * 2; // -1 to 1
    setCursor({ x: normX, y: normY, pxX, pxY });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[92vh] flex items-center pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300"
      style={{
        background: isDark
          ? 'radial-gradient(circle at 35% 30%, #16181D 0%, #0C0D0F 70%, #08090A 100%)'
          : 'radial-gradient(ellipse at 35% 25%, #FFFFFF 0%, #FAFAF8 55%, #F4F5F1 100%)',
      }}
    >
      {/* 1. Absolute Layer: Faint Cosmic Grid with subtle cursor parallax */}
      <div
        className="absolute inset-0 cosmic-grid pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate3d(${cursor.x * -9}px, ${cursor.y * -9}px, 0)`,
          opacity: isDark ? 0.75 : 0.65,
        }}
        aria-hidden="true"
      />

      {/* 2. Absolute Layer: Primary Soft Radial Light Bloom with high transparency, animated with framer-motion to pulse and drift */}
      <motion.div
        className="absolute top-1/3 left-1/4 sm:left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[920px] h-[540px] sm:h-[720px] pointer-events-none z-0 rounded-full blur-[100px] md:blur-[130px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.09) 0%, rgba(190, 210, 240, 0.038) 38%, rgba(255, 255, 255, 0.01) 60%, transparent 75%)'
            : 'radial-gradient(circle at center, rgba(218, 226, 238, 0.5) 0%, rgba(232, 238, 246, 0.3) 38%, rgba(250, 250, 248, 0.08) 65%, transparent 78%)',
        }}
        animate={{
          scale: [1, 1.14, 0.94, 1],
          x: [0, 28, -22, 0],
          y: [0, -32, 18, 0],
          rotate: [0, 20, -15, 0],
          opacity: isDark ? [0.38, 0.58, 0.42, 0.38] : [0.45, 0.7, 0.5, 0.45],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* 3. Absolute Layer: Secondary Ambient Conic Balance Bloom with subtle drift */}
      <motion.div
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[550px] sm:w-[700px] h-[480px] sm:h-[600px] pointer-events-none z-0 rounded-full blur-[90px] md:blur-[120px]"
        style={{
          background: isDark
            ? 'conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0.045) 0deg, rgba(160, 180, 220, 0.015) 180deg, rgba(255, 255, 255, 0.045) 360deg)'
            : 'conic-gradient(from 180deg at 50% 50%, rgba(224, 230, 242, 0.32) 0deg, rgba(245, 247, 250, 0.12) 180deg, rgba(224, 230, 242, 0.32) 360deg)',
        }}
        animate={{
          scale: [0.95, 1.08, 0.97, 0.95],
          x: [0, -22, 18, 0],
          y: [0, 22, -16, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* 4. Absolute Layer: Soft roaming spotlight tracking cursor coordinates */}
      <div
        className="absolute pointer-events-none transition-opacity duration-700 ease-out z-0"
        style={{
          left: cursor.pxX || '30%',
          top: cursor.pxY || '45%',
          width: '750px',
          height: '750px',
          transform: 'translate(-50%, -50%)',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(235, 240, 248, 0.35) 32%, transparent 68%)',
          opacity: isHovered ? 1 : 0.45,
        }}
        aria-hidden="true"
      />

      {/* 5. Absolute Layer: Delicate orbital coordinate arcs */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[650px] md:w-[850px] h-[750px] pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate3d(${cursor.x * 12}px, ${cursor.y * 12}px, 0)`,
        }}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full opacity-40 dark:opacity-30"
          viewBox="0 0 850 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric subtle celestial arcs */}
          <circle
            cx="500"
            cy="375"
            r="420"
            stroke={isDark ? '#FFFFFF' : '#17191D'}
            strokeWidth="0.85"
            strokeDasharray="4 8"
            opacity={isDark ? 0.2 : 0.14}
          />
          <circle
            cx="500"
            cy="375"
            r="280"
            stroke={isDark ? '#FFFFFF' : '#17191D'}
            strokeWidth="0.75"
            strokeDasharray="2 6"
            opacity={isDark ? 0.18 : 0.12}
          />
          <circle
            cx="500"
            cy="375"
            r="140"
            stroke={isDark ? '#FFFFFF' : '#17191D'}
            strokeWidth="0.65"
            opacity={isDark ? 0.16 : 0.1}
          />

          {/* Coordinate crosshair markers */}
          <line x1="500" y1="20" x2="500" y2="45" stroke={isDark ? '#FFFFFF' : '#17191D'} strokeWidth="1" opacity={isDark ? 0.35 : 0.25} />
          <line x1="500" y1="705" x2="500" y2="730" stroke={isDark ? '#FFFFFF' : '#17191D'} strokeWidth="1" opacity={isDark ? 0.35 : 0.25} />
          <line x1="90" y1="375" x2="115" y2="375" stroke={isDark ? '#FFFFFF' : '#17191D'} strokeWidth="1" opacity={isDark ? 0.35 : 0.25} />

          {/* Precision quadrant ticks */}
          <circle cx="500" cy="375" r="2.5" fill={isDark ? '#FFFFFF' : '#17191D'} opacity={isDark ? 0.4 : 0.25} />
          <circle cx="220" cy="375" r="1.5" fill={isDark ? '#FFFFFF' : '#17191D'} opacity={isDark ? 0.3 : 0.2} />
          <circle cx="780" cy="375" r="1.5" fill={isDark ? '#FFFFFF' : '#17191D'} opacity={isDark ? 0.3 : 0.2} />
        </svg>
      </div>

      {/* 6. Absolute Layer: Subtle floating anti-gravity particles with cursor parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {particles.map((p) => {
          const offsetX = cursor.x * p.parallaxFactor * 45;
          const offsetY = cursor.y * p.parallaxFactor * 45;
          return (
            <div
              key={p.id}
              className={`absolute rounded-full transition-transform duration-500 ease-out ${
                isDark ? 'bg-white shadow-[0_0_4px_rgba(255,255,255,0.6)]' : 'bg-[#4B5563]'
              }`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: isDark ? p.opacity * 1.3 : p.opacity * 1.1,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
                animation: `float-slow ${p.speed}s ease-in-out infinite`,
                animationDelay: `${p.id * 0.7}s`,
              }}
            />
          );
        })}
      </div>

      {/* 7. Main Content Area: STRICTLY LEFT-ALIGNED with generous negative space and crystal-clear contrast */}
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-left flex flex-col items-start">
          {/* Eyebrow: Quiet, letter-spaced coordinates */}
          <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-medium tracking-[0.22em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-8 select-none font-mono">
            <span>ALZA.NET IT SOLUTIONS</span>
            <span aria-hidden="true" className="text-[#8B92A0] dark:text-[#6B7280]">/</span>
            <span>BOHOL, PHILIPPINES</span>
          </div>

          {/* Primary Heading: Authoritative, crisp, left-aligned */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-[-0.035em] leading-[1.06] mb-8 text-left text-balance">
            Technology built around real problems.
          </h1>

          {/* Supporting Copy: Airy, comfortable measure, high readability */}
          <p className="text-base sm:text-lg md:text-xl text-[#4B5262] dark:text-[#9CA3AF] leading-relaxed mb-12 max-w-2xl font-normal text-left">
            We design and engineer practical digital systems for government offices,
            organizations, and businesses — turning complex requirements into reliable software.
          </p>

          {/* Monochromatic CTA Actions with Magnetic Cursor Interaction */}
          <div className="flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto mb-14">
            <MagneticButton
              onClick={() => onNavigate('contact')}
              strength={0.28}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] border border-[#17191D] dark:border-white rounded-lg shadow-xs whitespace-nowrap active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 dark:text-[#0C0D0F]/80" />
            </MagneticButton>

            <MagneticButton
              onClick={onExploreWork}
              strength={0.22}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#17191D] dark:text-white bg-white dark:bg-[#141619] hover:bg-[#F4F5F8] dark:hover:bg-[#1D2026] border border-[#DCE0E6] dark:border-[#242830] hover:border-[#17191D] dark:hover:border-white/50 rounded-lg whitespace-nowrap active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#5F6573] dark:text-[#9CA3AF]" />
            </MagneticButton>
          </div>

          {/* Small Motto Line: Unboxed, quiet typographic anchor (Left-aligned) */}
          <div className="pt-8 border-t border-[#E2E5EB]/80 dark:border-[#242830] flex items-center justify-start gap-3 text-xs tracking-wider text-[#5F6573] dark:text-[#9CA3AF] select-none">
            <span className="font-semibold text-[#17191D] dark:text-[#F7F7F8] uppercase text-[11px] tracking-[0.16em] font-mono">
              Motto
            </span>
            <span aria-hidden="true" className="text-[#8B92A0] dark:text-[#6B7280]">·</span>
            <span className="font-medium text-[#17191D] dark:text-[#F7F7F8] tracking-[0.18em]">
              WE FIND. WE SOLVE. WE LIFT.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
