"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/utm";

/**
 * Mounts once at the root layout level and snapshots UTM / gclid / landing
 * page on first load. No DOM output — pure side effect.
 *
 * Lives at the layout so attribution is captured regardless of which page
 * the visitor lands on (home, /lp/ev, /services/painting, etc.). Without this
 * top-level capture, attribution would only fire when ContactForm mounted —
 * meaning visitors who land on a landing page WITHOUT a form and navigate to
 * one would arrive UTM-less.
 */
export function UtmCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
