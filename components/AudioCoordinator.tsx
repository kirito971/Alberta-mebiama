"use client";

import { useEffect } from "react";

/**
 * Ensures only one audio player on the page plays at a time:
 * when a <audio> starts playing, every other currently-playing
 * <audio>/<video> on the page is paused.
 */
export default function AudioCoordinator() {
  useEffect(() => {
    function handlePlay(event: Event) {
      const justStarted = event.target as HTMLMediaElement;
      document.querySelectorAll("audio, video").forEach((media) => {
        const el = media as HTMLMediaElement;
        if (el !== justStarted && !el.paused) {
          el.pause();
        }
      });
    }

    // 'play' does not bubble, so listen on the capture phase at the document level.
    document.addEventListener("play", handlePlay, true);
    return () => document.removeEventListener("play", handlePlay, true);
  }, []);

  return null;
}
