import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 20,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.07,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_OUT_EXPO },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface DepthCardProps {
  children: React.ReactNode;
  className?: string;
  roundedClass?: string;
  tiltStrength?: number;
  hoverY?: number;
  enableTilt?: boolean;
  onClick?: () => void;
  id?: string;
}

/**
 * Interactive 3D depth card with cursor-following monochrome spotlight glow,
 * subtle 3D perspective tilt (max 4 deg), multi-layer shadows, and translucent 1px border.
 */
export const DepthCard: React.FC<DepthCardProps> = ({
  children,
  className = '',
  roundedClass = 'rounded-2xl',
  tiltStrength = 3.5,
  hoverY = -6,
  enableTilt = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const clampedTilt = Math.min(Math.max(tiltStrength, 0), 4);
  const springConfig = { stiffness: 220, damping: 24, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [clampedTilt, -clampedTilt]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-clampedTilt, clampedTilt]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReduced) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    setSpotlight({
      x: relX * 100,
      y: relY * 100,
      active: true,
    });

    if (enableTilt) {
      mouseX.set(relX - 0.5);
      mouseY.set(relY - 0.5);
    }
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        !prefersReduced && enableTilt
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1100,
            }
          : undefined
      }
      whileHover={!prefersReduced ? { y: hoverY } : undefined}
      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      className={`relative ${roundedClass} depth-surface overflow-hidden ${className}`}
    >
      {/* Subtle monochrome cursor spotlight overlay */}
      {!prefersReduced && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `radial-gradient(480px circle at ${spotlight.x}% ${spotlight.y}%, var(--spotlight-color), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
};
