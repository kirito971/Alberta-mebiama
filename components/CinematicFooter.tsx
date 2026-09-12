"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact, skillTicker } from "@/lib/repertoire";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function joinClass(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

// ---------------------------------------------------------------------------
// Magnetic pill: follows the pointer on desktop (mousemove), and gives a
// simple tap-scale on touch devices instead — a persistent "magnetic" pull
// isn't meaningful on touch (there's no hover position), so mobile gets its
// own equally-visible feedback rather than silently doing nothing.
// ---------------------------------------------------------------------------
type MagneticProps = {
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

function Magnetic({
  as = "a",
  href,
  target,
  rel,
  onClick,
  className,
  children,
  ariaLabel,
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    // Magnetic pull only makes sense with a real pointer (mouse/trackpad).
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const cls = joinClass("cine-pill", className);

  if (as === "button") {
    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        className={cls}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      className={cls}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function MarqueeRow() {
  return (
    <div className="cine-marquee-row">
      {skillTicker.map((item, i) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          {i < skillTicker.length - 1 && (
            <span className="cine-marquee-dot">✦</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function CinematicFooter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  // This footer lives in the root layout, so it never unmounts between
  // pages — only `pathname` changes. Its ScrollTrigger start/end offsets
  // are measured in pixels against whatever page happened to be mounted
  // first; a shorter or taller page swapped in above it (client-side, no
  // reload) leaves those offsets stale, so the reveal can get stuck at
  // its start state. Re-measuring on every route change fixes that.
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !wrapRef.current) return;

    const ctx = gsap.context(() => {
      // `once: true` plays the reveal to completion the moment the wrap
      // scrolls into view — no `scrub` tying it to live scroll position.
      // On mobile, the browser chrome (address bar) collapsing mid-scroll
      // keeps changing 100dvh, which kept nudging the scrubbed progress and
      // left it stuck at a partial (barely-visible) opacity. A one-shot
      // reveal finishes regardless of any of that happening afterward.
      gsap.fromTo(
        giantRef.current,
        { y: "8vh", opacity: 0.15 },
        {
          y: "0vh",
          opacity: 1,
          duration: 1.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, pillsRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, wrapRef);

    const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(id);
      ctx.revert();
    };
  }, []);

  // Re-measure trigger positions against the page that is actually mounted
  // now — see the note above `pathname`. Runs after every navigation,
  // including the first, once the new page has had a frame to lay out.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={wrapRef} className="cine-wrap" id="contact">
      <footer className="cine-footer">
        <div className="cine-aurora" aria-hidden="true" />
        <div className="cine-grid" aria-hidden="true" />
        <div ref={giantRef} className="cine-giant" aria-hidden="true">
          ALBERTA
        </div>

        <div className="cine-marquee-bar">
          <div className="cine-marquee-track">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>

        <div className="cine-center">
          <h2 ref={headingRef} className="cine-heading">
            Une question, un projet ?
          </h2>

          <div ref={pillsRef} className="cine-pills">
            <div className="cine-pills-row">
              <Magnetic
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cine-pill-primary"
              >
                <Image
                  src="/images/icons/whatsapp.png"
                  alt=""
                  width={20}
                  height={20}
                />
                WhatsApp
              </Magnetic>

              <Magnetic
                href={`mailto:${contact.email}`}
                className="cine-pill-primary"
              >
                {contact.email}
              </Magnetic>
            </div>

            <div className="cine-pills-row cine-pills-row-secondary">
              <Magnetic
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/instagram.png"
                  alt=""
                  width={16}
                  height={16}
                />
                Instagram
              </Magnetic>
              <Link href="/repertoire" className="cine-pill">
                Voir le répertoire →
              </Link>
            </div>
          </div>
        </div>

        <div className="cine-bottom">
          <span className="cine-copyright">
            © {new Date().getFullYear()} Alberta Mebiama — Comédienne de
            doublage &amp; voix off
          </span>
          <Magnetic
            as="button"
            onClick={scrollToTop}
            className="cine-to-top"
            ariaLabel="Remonter en haut de la page"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Magnetic>
        </div>
      </footer>
    </div>
  );
}
