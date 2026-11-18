import React, { useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { PageRoute } from '../../types';
import { MagneticButton } from '../common/MagneticButton';
import { LiquidMonolith3D } from './LiquidMonolith3D';
import { useTheme } from '../../context/ThemeContext';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onExploreWork: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  parallaxFactor: number;
}

const PARTICLES: Particle[] = [
  { id: 1, x: 10, y: 22, size: 2, opacity: 0.24, speed: 12, parallaxFactor: 0.03 },
  { id: 2, x: 30, y: 15, size: 1.5, opacity: 0.18, speed: 15, parallaxFactor: 0.04 },
  { id: 3, x: 74, y: 20, size: 2, opacity: 0.25, speed: 11, parallaxFactor: 0.04 },
  { id: 4, x: 66, y: 62, size: 1.5, opacity: 0.2, speed: 14, parallaxFactor: 0.05 },
  { id: 5, x: 20, y: 74, size: 2, opacity: 0.22, speed: 13, parallaxFactor: 0.04 },
  { id: 6, x: 46, y: 28, size: 1.5, opacity: 0.16, speed: 16, parallaxFactor: 0.02 },
  { id: 7, x: 89, y: 16, size: 2, opacity: 0.22, speed: 10, parallaxFactor: 0.05 },
  { id: 8, x: 85, y: 78, size: 1.5, opacity: 0.2, speed: 15, parallaxFactor: 0.03 },
  { id: 9, x: 40, y: 86, size: 2, opacity: 0.18, speed: 12, parallaxFactor: 0.04 },
  { id: 10, x: 93, y: 46, size: 1.5, opacity: 0.22, speed: 13, parallaxFactor: 0.05 },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CosmicParticle: React.FC<{
  particle: Particle;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  isDark: boolean;
  prefersReduced: boolean | null;
}> = ({ particle, cursorX, cursorY, isDark, prefersReduced }) => {
  const offsetX = useTransform(cursorX, (value) => prefersReduced ? 0 : value * particle.parallaxFactor * 42);
  const offsetY = useTransform(cursorY, (value) => prefersReduced ? 0 : value * particle.parallaxFactor * 42);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        x: offsetX,
        y: offsetY,
      }}
    >
      <div
        className={`rounded-full ${
          isDark ? 'bg-white shadow-[0_0_4px_rgba(255,255,255,0.45)]' : 'bg-[#3F3F46]'
        }`}
        style={{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          opacity: isDark ? particle.opacity * 1.2 : particle.opacity,
          animation: prefersReduced ? undefined : `float-slow ${particle.speed}s ease-in-out infinite`,
          animationDelay: `${particle.id * 0.6}s`,
        }}
      />
    </motion.div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigate, onExploreWork }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const prefersReduced = useReducedMotion();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorPxX = useMotionValue<number | string>('30%');
  const cursorPxY = useMotionValue<number | string>('45%');
  const spotlightOpacity = useMotionValue(0.4);
  const gridX = useTransform(cursorX, (value) => prefersReduced ? 0 : value * -8);
  const gridY = useTransform(cursorY, (value) => prefersReduced ? 0 : value * -8);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || prefersReduced) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const pxY = e.clientY - rect.top;
    const normX = (pxX / rect.width - 0.5) * 2;
    const normY = (pxY / rect.height - 0.5) * 2;
    cursorX.set(normX);
    cursorY.set(normY);
    cursorPxX.set(pxX);
    cursorPxY.set(pxY);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => spotlightOpacity.set(1)}
      onMouseLeave={() => spotlightOpacity.set(0.4)}
      className="relative min-h-[94vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[var(--border)] transition-colors duration-300"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse 80% 70% at 30% 25%, #111114 0%, #070708 55%, #050506 100%)'
          : 'radial-gradient(ellipse 80% 70% at 30% 25%, #FFFFFF 0%, #FAFAFA 58%, #F2F2F4 100%)',
      }}
    >
      {/* 1. Faint Monochrome Technical Grid with subtle parallax */}
      <motion.div
        className="absolute inset-0 cosmic-grid pointer-events-none z-0"
        style={{
          x: gridX,
          y: gridY,
          opacity: isDark ? 0.7 : 0.65,
        }}
        aria-hidden="true"
      />

      {/* 2. Liquid Morphing Grayscale Mesh Blob (Primary) */}
      <motion.div
        className="absolute top-[18%] left-[18%] w-[680px] sm:w-[920px] h-[520px] sm:h-[680px] pointer-events-none z-0 blur-[110px] md:blur-[140px] animate-liquid-morph"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.065) 0%, rgba(161, 161, 170, 0.025) 45%, transparent 75%)'
            : 'radial-gradient(circle at center, rgba(212, 212, 216, 0.55) 0%, rgba(228, 228, 231, 0.32) 45%, transparent 78%)',
        }}
        animate={
          prefersReduced
            ? undefined
            : {
                scale: [1, 1.09, 0.96, 1],
                opacity: isDark ? [0.45, 0.65, 0.48, 0.45] : [0.5, 0.72, 0.54, 0.5],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* 3. Secondary Liquid Grayscale Bloom behind 3D Monolith */}
      <motion.div
        className="absolute top-[38%] right-[8%] w-[520px] sm:w-[680px] h-[480px] sm:h-[620px] pointer-events-none z-0 rounded-full blur-[110px] md:blur-[130px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.055) 0%, rgba(113, 113, 122, 0.02) 50%, transparent 75%)'
            : 'radial-gradient(circle at center, rgba(161, 161, 170, 0.22) 0%, rgba(228, 228, 231, 0.16) 50%, transparent 78%)',
        }}
        animate={
          prefersReduced
            ? undefined
            : {
                scale: [0.96, 1.07, 0.98, 0.96],
                x: [0, -18, 14, 0],
                y: [0, 16, -12, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* 4. Soft Cursor-Tracking Monochrome Spotlight */}
      <motion.div
        className="absolute pointer-events-none transition-opacity duration-700 ease-out z-0"
        style={{
          left: cursorPxX,
          top: cursorPxY,
          width: '720px',
          height: '720px',
          transform: 'translate(-50%, -50%)',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0.01) 42%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(244, 244, 245, 0.35) 36%, transparent 68%)',
          opacity: spotlightOpacity,
        }}
        aria-hidden="true"
      />

      {/* 5. Sparse Floating Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {PARTICLES.map((particle) => (
          <CosmicParticle
            key={particle.id}
            particle={particle}
            cursorX={cursorX}
            cursorY={cursorY}
            isDark={isDark}
            prefersReduced={prefersReduced}
          />
        ))}
      </div>

      {/* 6. Main Asymmetric Editorial Grid */}
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-4">
          {/* Left Column: Monumental Display Typography */}
          <div className="lg:col-span-8 text-left flex flex-col items-start relative z-20">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2.5 type-eyebrow text-[#585860] dark:text-[#9898A2] mb-7 select-none"
            >
              <span>ALZA.NET IT SOLUTIONS</span>
              <span aria-hidden="true" className="text-[#868690] dark:text-[#64646E]">/</span>
              <span>BOHOL, PHILIPPINES</span>
            </motion.div>

            {/* Fluid Display Headline: bolder weight 800 with crisp startup wipe-in animation */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={
                  prefersReduced
                    ? false
                    : {
                        clipPath: 'inset(0 100% 0 0)',
                        opacity: 0,
                        y: 16,
                      }
                }
                animate={{
                  clipPath: 'inset(0 0% 0 0)',
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  clipPath: { duration: 0.95, delay: 0.08, ease: EASE_OUT_EXPO },
                  opacity: { duration: 0.55, delay: 0.08, ease: EASE_OUT_EXPO },
                  y: { duration: 0.85, delay: 0.08, ease: EASE_OUT_EXPO },
                }}
                className="type-display font-extrabold text-[#0E0E10] dark:text-[#F5F5F7] text-left text-balance max-w-[14ch] pb-1"
              >
                Technology built around real problems.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="text-base sm:text-lg text-[#585860] dark:text-[#9898A2] leading-[1.65] mb-11 max-w-xl font-normal text-left"
            >
              We design and engineer practical digital systems for government offices,
              organizations, and businesses — turning complex requirements into reliable software.
            </motion.p>

            {/* CTA Actions: Solid Near-Black Primary + Frosted Outline Secondary */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto mb-14"
            >
              <MagneticButton
                onClick={() => onNavigate('contact')}
                strength={0.22}
                className="btn-primary-depth inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white border border-[#0E0E10] dark:border-white rounded-xl active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-white/80 dark:text-[#050506]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                onClick={onExploreWork}
                strength={0.18}
                className="btn-frosted inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#585860] dark:text-[#9898A2] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0E0E10] dark:group-hover:text-white" />
              </MagneticButton>
            </motion.div>

            {/* Motto Anchor */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.34, ease: EASE_OUT_EXPO }}
              className="pt-7 border-t border-[var(--border)] flex items-center justify-start gap-3 text-xs tracking-wider text-[#585860] dark:text-[#9898A2] select-none"
            >
              <span className="font-semibold text-[#0E0E10] dark:text-[#F5F5F7] uppercase text-[11px] tracking-[0.18em] font-mono">
                Motto
              </span>
              <span aria-hidden="true" className="text-[#868690] dark:text-[#64646E]">·</span>
              <span className="font-medium text-[#0E0E10] dark:text-[#F5F5F7] tracking-[0.2em]">
                WE FIND. WE SOLVE. WE LIFT.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Subtle 3D Monochrome Liquid-Metal Sphere */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="lg:col-span-4 flex items-center justify-center lg:justify-end relative z-10 lg:-mr-6"
          >
            <LiquidMonolith3D cursorX={cursorX} cursorY={cursorY} isDark={isDark} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
