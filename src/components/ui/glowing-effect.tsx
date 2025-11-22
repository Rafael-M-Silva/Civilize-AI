"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    const gradient =
      variant === "white"
        ? `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            var(--black),
            var(--black) calc(25% / 5)
          )`
        : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
          radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
          radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
          radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #dd7bbb 0%,
            #d79f1e calc(25% / 5),
            #5a922c calc(50% / 5), 
            #4c7894 calc(75% / 5),
            #dd7bbb calc(100% / 5)
          )`;

    return (
      <>
        {/* Fallback border when disabled */}
        <div
          style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: 'inherit',
            border: '1px solid',
            borderColor: variant === "white" ? 'white' : 'currentColor',
            opacity: glow ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
            display: disabled ? 'block' : 'none'
          }}
        />
        
        {/* Animated glowing effect */}
        <div
          ref={containerRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity: glow ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
            filter: blur > 0 ? `blur(${blur}px)` : undefined,
            display: disabled ? 'none' : 'block',
            ...({
              '--spread': spread,
              '--start': '0',
              '--active': '0',
            } as React.CSSProperties)
          }}
          className={className}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: `-${borderWidth}px`,
                borderRadius: 'inherit',
                border: `${borderWidth}px solid transparent`,
                background: gradient,
                backgroundAttachment: 'fixed',
                opacity: 'var(--active)',
                transition: 'opacity 0.3s',
                WebkitMaskImage: 'linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - var(--spread)) * 1deg), #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg))',
                maskImage: 'linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - var(--spread)) * 1deg), #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg))',
                WebkitMaskClip: 'padding-box, border-box',
                maskClip: 'padding-box, border-box',
                WebkitMaskComposite: 'intersect',
                maskComposite: 'intersect',
              } as React.CSSProperties}
            />
          </div>
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
