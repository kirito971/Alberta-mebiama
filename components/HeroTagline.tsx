"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroTagline({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [changing, setChanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (lines.length < 2) return;

    const interval = setInterval(() => {
      setChanging(true);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setChanging(false);
      }, 260);
    }, 3500);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lines.length]);

  return (
    <p className={`hero-line${changing ? " is-changing" : ""}`}>
      {lines[index]}
    </p>
  );
}
