import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
}

/**
 * Truly seamless cinemagraph-style background video.
 *
 * Uses a "ping-pong" (boomerang) loop: the clip plays forward to the end,
 * then reverses back to the start, then forward again — endlessly. Because
 * the reversal pivot IS the last/first frame, there is mathematically no
 * seam, jump, or cut. Works with any source clip.
 */
const VideoBackground = ({ src, poster, className = "", overlayClassName, children }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy-load when near viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Drive a ping-pong (boomerang) loop with rAF — forward to end, reverse to
  // start, forward again. Guarantees first frame === last frame at every
  // pivot, so the loop is truly seamless.
  useEffect(() => {
    if (!isVisible) return;
    const video = videoRef.current;
    if (!video) return;

    let direction: 1 | -1 = 1;
    let rafId: number;
    let lastTs = performance.now();
    const PLAYBACK_RATE = 0.85; // slow & cinematic

    const start = async () => {
      try {
        video.muted = true;
        video.playbackRate = PLAYBACK_RATE;
        await video.play();
        // After we've started, keep manual control so we can reverse.
        // (We let it play forward natively; only take over on direction flip.)
      } catch {
        /* autoplay blocked — poster will remain */
      }
    };

    const tick = (ts: number) => {
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const dur = video.duration;
      if (dur && !isNaN(dur)) {
        if (direction === 1) {
          // Forward — let native playback run; flip near the end.
          if (video.currentTime >= dur - 0.05) {
            direction = -1;
            video.pause();
          }
        } else {
          // Reverse — manually step backward.
          const next = video.currentTime - PLAYBACK_RATE * dt;
          if (next <= 0.05) {
            video.currentTime = 0;
            direction = 1;
            video.play().catch(() => {});
          } else {
            video.currentTime = next;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    start();
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.pause();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className={`video-bg-container ${className}`}>
      {isVisible && (
        <video
          ref={videoRef}
          muted
          playsInline
          poster={poster}
          preload="auto"
          className="pointer-events-none"
          style={{ opacity: 1 }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className={overlayClassName || "video-overlay"} />
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
