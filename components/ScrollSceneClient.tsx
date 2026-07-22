"use client";

import dynamic from "next/dynamic";

// Three.js / WebGL must only run in the browser — never during SSR.
const ScrollScene = dynamic(() => import("@/components/ScrollScene"), {
  ssr: false,
});

/**
 * Fixed, full-viewport 3D backdrop that sits behind all page content.
 * It shows through transparent sections (e.g. the hero) and animates on scroll.
 */
export default function ScrollSceneClient() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none bg-ai-950"
    >
      <ScrollScene />
    </div>
  );
}
