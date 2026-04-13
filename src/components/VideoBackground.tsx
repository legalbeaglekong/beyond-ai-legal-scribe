import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
}

const VideoBackground = ({ src, poster, className = "", overlayClassName, children }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className={`video-bg-container ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="auto"
        className="pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={overlayClassName || "video-overlay"} />
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
