import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface LiquidMonolith3DProps {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  isDark: boolean;
}

/**
 * High-FPS procedural monochrome 3D liquid-metal sculptural sphere.
 * Renders harmonic organic surface tension ripples, cursor-reactive studio lighting,
 * Fresnel rim reflections, and 3D perspective orbital hairlines.
 */
export const LiquidMonolith3D: React.FC<LiquidMonolith3DProps> = ({ cursorX, cursorY, isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const targetCursor = useRef({ x: 0, y: 0 });
  const currentCursor = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    targetCursor.current = { x: cursorX.get(), y: cursorY.get() };
    const unsubscribeX = cursorX.on('change', (x) => {
      targetCursor.current.x = x;
    });
    const unsubscribeY = cursorY.on('change', (y) => {
      targetCursor.current.y = y;
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const logicalSize = 460;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = logicalSize * dpr;
    canvas.height = logicalSize * dpr;
    ctx.scale(dpr, dpr);

    const drawLiquidForm = (time: number) => {
      // Smooth cursor damping
      currentCursor.current.x += (targetCursor.current.x - currentCursor.current.x) * 0.06;
      currentCursor.current.y += (targetCursor.current.y - currentCursor.current.y) * 0.06;

      const cx = logicalSize / 2 + currentCursor.current.x * 8;
      const cy = logicalSize / 2 + currentCursor.current.y * 8;
      const baseR = 148;
      const t = prefersReduced ? 0 : time * 0.00075;

      ctx.clearRect(0, 0, logicalSize, logicalSize);

      // Build smooth harmonic liquid-metal contour
      const points = 120;
      const traceContour = (radiusScale = 1, phaseOffset = 0, ampScale = 1) => {
        const coords: { x: number; y: number }[] = [];
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const wave1 = Math.sin(angle * 3 + t + phaseOffset) * 3.6 * ampScale;
          const wave2 = Math.cos(angle * 5 - t * 1.3 + phaseOffset) * 2.1 * ampScale;
          const wave3 = Math.sin(angle * 2 + t * 0.7) * 2.8 * ampScale;
          const r = baseR * radiusScale + wave1 + wave2 + wave3;
          coords.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
          });
        }

        ctx.beginPath();
        for (let i = 0; i < points; i++) {
          const p0 = coords[i];
          const p1 = coords[(i + 1) % points];
          const midX = (p0.x + p1.x) / 2;
          const midY = (p0.y + p1.y) / 2;
          if (i === 0) {
            const prev = coords[points - 1];
            ctx.moveTo((prev.x + p0.x) / 2, (prev.y + p0.y) / 2);
          }
          ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
        }
        ctx.closePath();
      };

      // 1. Ambient outer atmospheric halo
      const haloGrad = ctx.createRadialGradient(cx, cy, baseR * 0.65, cx, cy, baseR * 1.48);
      if (isDark) {
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.075)');
        haloGrad.addColorStop(0.55, 'rgba(255, 255, 255, 0.02)');
        haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        haloGrad.addColorStop(0, 'rgba(14, 14, 16, 0.08)');
        haloGrad.addColorStop(0.55, 'rgba(14, 14, 16, 0.025)');
        haloGrad.addColorStop(1, 'rgba(14, 14, 16, 0)');
      }
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 1.48, 0, Math.PI * 2);
      ctx.fill();

      // Key light position moves gently with cursor
      const lightX = cx - 48 + currentCursor.current.x * 34;
      const lightY = cy - 54 + currentCursor.current.y * 34;

      // 2. Primary 3D Sculpted Liquid-Metal Body
      ctx.save();
      traceContour(1, 0, 1);

      const bodyGrad = ctx.createRadialGradient(
        lightX,
        lightY,
        baseR * 0.06,
        cx + 18,
        cy + 22,
        baseR * 1.28
      );

      if (isDark) {
        // Obsidian Liquid Chrome
        bodyGrad.addColorStop(0, '#FFFFFF');
        bodyGrad.addColorStop(0.14, '#D4D4D8');
        bodyGrad.addColorStop(0.36, '#52525B');
        bodyGrad.addColorStop(0.65, '#18181B');
        bodyGrad.addColorStop(0.88, '#09090B');
        bodyGrad.addColorStop(1, '#27272A');
      } else {
        // Brushed Platinum / Mercury Pearl
        bodyGrad.addColorStop(0, '#FFFFFF');
        bodyGrad.addColorStop(0.18, '#F4F4F5');
        bodyGrad.addColorStop(0.45, '#B8B8C0');
        bodyGrad.addColorStop(0.74, '#3F3F46');
        bodyGrad.addColorStop(0.92, '#141417');
        bodyGrad.addColorStop(1, '#71717A');
      }

      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Clip interior specular reflections to the liquid body
      ctx.clip();

      // 3. Secondary fluid caustic reflection band (simulating liquid metal refraction)
      const bandOffsetX = Math.sin(t * 0.9) * 18 - currentCursor.current.x * 20;
      const bandOffsetY = Math.cos(t * 0.8) * 14 - currentCursor.current.y * 20;
      const causticGrad = ctx.createRadialGradient(
        cx + 52 + bandOffsetX,
        cy + 62 + bandOffsetY,
        4,
        cx + 42 + bandOffsetX,
        cy + 48 + bandOffsetY,
        baseR * 0.88
      );
      if (isDark) {
        causticGrad.addColorStop(0, 'rgba(255, 255, 255, 0.24)');
        causticGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.06)');
        causticGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        causticGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
        causticGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.16)');
        causticGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = causticGrad;
      ctx.fillRect(0, 0, logicalSize, logicalSize);

      // 4. Inner liquid mercury fold highlight
      traceContour(0.76, 2.2, 1.35);
      const innerGrad = ctx.createLinearGradient(
        lightX - 30,
        lightY - 30,
        cx + baseR * 0.7,
        cy + baseR * 0.7
      );
      if (isDark) {
        innerGrad.addColorStop(0, 'rgba(255, 255, 255, 0.14)');
        innerGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
        innerGrad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
      } else {
        innerGrad.addColorStop(0, 'rgba(255, 255, 255, 0.42)');
        innerGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
        innerGrad.addColorStop(1, 'rgba(14, 14, 16, 0.12)');
      }
      ctx.fillStyle = innerGrad;
      ctx.fill();

      // 5. Sharp specular highlight bead
      const specGrad = ctx.createRadialGradient(lightX - 6, lightY - 6, 1, lightX, lightY, 44);
      specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      specGrad.addColorStop(0.35, isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.55)');
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = specGrad;
      ctx.beginPath();
      ctx.arc(lightX, lightY, 44, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 6. Crisp Fresnel edge stroke
      traceContour(1, 0, 1);
      ctx.lineWidth = 1.25;
      const rimGrad = ctx.createLinearGradient(lightX - 80, lightY - 80, cx + baseR, cy + baseR);
      if (isDark) {
        rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
        rimGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.12)');
        rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0.25)');
      } else {
        rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        rimGrad.addColorStop(0.5, 'rgba(14, 14, 16, 0.16)');
        rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0.45)');
      }
      ctx.strokeStyle = rimGrad;
      ctx.stroke();
    };

    drawLiquidForm(0);

    const loop = (time: number) => {
      animId = 0;
      if (!isVisibleRef.current || document.visibilityState !== 'visible') return;
      drawLiquidForm(time);
      if (!prefersReduced) animId = requestAnimationFrame(loop);
    };
    const startAnimation = () => {
      if (!prefersReduced && !animId && isVisibleRef.current && document.visibilityState === 'visible') {
        animId = requestAnimationFrame(loop);
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          startAnimation();
        } else if (animId) {
          cancelAnimationFrame(animId);
          animId = 0;
        }
      },
      { rootMargin: '100px 0px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startAnimation();
      } else if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isDark, prefersReduced]);

  // Subtle 3D tilt for surrounding architectural rings
  const ringOneX = useTransform(cursorY, (y) => 68 + (prefersReduced ? 0 : y * -8));
  const ringOneY = useTransform(cursorX, (x) => -18 + (prefersReduced ? 0 : x * 8));
  const ringTwoX = useTransform(cursorY, (y) => -58 + (prefersReduced ? 0 : y * -5.6));
  const ringTwoY = useTransform(cursorX, (x) => 24 + (prefersReduced ? 0 : x * 5.6));

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] flex items-center justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Floor contact shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[56%] h-8 rounded-full blur-2xl transition-colors duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 72%)'
            : 'radial-gradient(ellipse at center, rgba(10,10,12,0.18) 0%, transparent 72%)',
        }}
      />

      {/* 3D Tilted Orbital Glass Ring 1 */}
      <motion.div
        className="absolute inset-[7%] rounded-full border border-black/10 dark:border-white/12"
        style={{
          perspective: 1000,
          rotateX: ringOneX,
          rotateY: ringOneY,
          boxShadow: isDark
            ? 'inset 0 1px 0 rgba(255,255,255,0.14)'
            : 'inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      />

      {/* 3D Tilted Orbital Glass Ring 2 */}
      <motion.div
        className="absolute inset-[1%] rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08]"
        style={{
          perspective: 1000,
          rotateX: ringTwoX,
          rotateY: ringTwoY,
        }}
      />

      {/* Procedural 3D Liquid-Metal Sphere Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
