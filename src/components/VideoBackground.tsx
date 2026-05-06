import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
}

/**
 * Seamless cinematic looping background video.
 *
 * Uses two stacked <video> elements that crossfade ~600ms before the end of
 * the clip, eliminating the visible "skip" you get with a single looping
 * video element. Both buffers preload the full file at high resolution.
 */
const VideoBackground = ({ src, poster, className = "", overlayClassName, children }: VideoBackgroundProps) => {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeBuffer, setActiveBuffer] = useState<"A" | "B">("A");

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

  // Start the active buffer playing as soon as the video is visible
  useEffect(() => {
    if (!isVisible) return;
    const a = videoARef.current;
    const b = videoBRef.current;
    if (a) a.play().catch(() => {});
    if (b) {
      b.pause();
      b.currentTime = 0;
    }
  }, [isVisible]);

  // Crossfade handoff: when the active video is ~600ms from ending, start the
  // inactive one and swap opacity. Eliminates seams, gaps and skips.
  useEffect(() => {
    if (!isVisible) return;
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const FADE_LEAD = 0.6; // seconds before end to start crossfade

    const onTimeUpdate = (current: HTMLVideoElement, other: HTMLVideoElement, nextActive: "A" | "B") => () => {
      if (!current.duration || isNaN(current.duration)) return;
      const remaining = current.duration - current.currentTime;
      if (remaining <= FADE_LEAD && other.paused) {
        other.currentTime = 0;
        other.play().catch(() => {});
        setActiveBuffer(nextActive);
      }
    };

    const handlerA = onTimeUpdate(a, b, "B");
    const handlerB = onTimeUpdate(b, a, "A");
    a.addEventListener("timeupdate", handlerA);
    b.addEventListener("timeupdate", handlerB);

    // After the crossfade, reset the just-finished video so it's ready to take
    // over again on the next handoff.
    const resetA = () => { a.pause(); a.currentTime = 0; };
    const resetB = () => { b.pause(); b.currentTime = 0; };
    a.addEventListener("ended", resetA);
    b.addEventListener("ended", resetB);

    return () => {
      a.removeEventListener("timeupdate", handlerA);
      b.removeEventListener("timeupdate", handlerB);
      a.removeEventListener("ended", resetA);
      b.removeEventListener("ended", resetB);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className={`video-bg-container ${className}`}>
      {isVisible && (
        <>
          <video
            ref={videoARef}
            muted
            playsInline
            poster={poster}
            preload="auto"
            className="pointer-events-none"
            style={{ opacity: activeBuffer === "A" ? 1 : 0 }}
          >
            <source src={src} type="video/mp4" />
          </video>
          <video
            ref={videoBRef}
            muted
            playsInline
            preload="auto"
            className="pointer-events-none"
            style={{ opacity: activeBuffer === "B" ? 1 : 0 }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}
      <div className={overlayClassName || "video-overlay"} />
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
