"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/**
 * Returns false during SSR/hydration so server and client markup match.
 * After mount, returns the real prefers-reduced-motion preference.
 */
export function usePrefersReducedMotion() {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const reduceMotion = useReducedMotion();
  return mounted ? !!reduceMotion : false;
}
