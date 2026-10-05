"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    video.addEventListener("ended", play);
    return () => video.removeEventListener("ended", play);
  }, []);

  return (
    <section
      id="home"
      data-hero-section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        aria-hidden
      >
        <source src="/ai-engineer-01-morning.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
