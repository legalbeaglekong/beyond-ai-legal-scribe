import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
}

/**
 * Seamless looping background video.
 *
 * Source clips are choreographed so the final frame is visually identical to
 * the first frame (cyclic motion), so we use the browser's native HTML5
 * `loop` attribute — the cleanest, lowest-overhead seamless playback.
 */
const VideoBackground = ({ src, poster, className = "", overlayClassName, children }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (!isVisible) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playbackRate = 0.9;
    video.play().catch(() => {});
  }, [isVisible]);

  return (
    <div ref={containerRef} className={`video-bg-container ${className}`}>
      {isVisible && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          poster={poster}
          preload="auto"
          className="pointer-events-none"
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
