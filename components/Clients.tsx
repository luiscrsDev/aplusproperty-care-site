"use client";

import { useState } from "react";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";

/**
 * Logo grid for the "Trusted by" treatment.
 *
 * Each logo lives at /public/clients/{file}. Logos render in their original
 * brand colors so each client is instantly recognizable — the recognition value
 * is exactly what makes a "trusted by" section work as social proof. A subtle
 * lift on hover gives polish without dampening the colors.
 *
 * Uses `next/image` so Vercel serves WebP/AVIF with width hints + lazy loading
 * out of the box. Falls back gracefully to a text pill if the image asset
 * hasn't been added yet.
 */
export function ClientsGrid({ columns = 4 }: { columns?: 2 | 3 | 4 }) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4";
  return (
    <div className={`grid grid-cols-2 ${colClass} gap-x-6 gap-y-7 items-center`}>
      {CLIENTS.map((c) => (
        <ClientLogo key={c.slug} name={c.name} file={c.file} />
      ))}
    </div>
  );
}

function ClientLogo({ name, file }: { name: string; file: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex items-center justify-center h-12">
        <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-navy/45 text-center">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-12 px-2">
      <Image
        src={`/clients/${file}`}
        alt={`${name} — APLUS Property Care client`}
        // Width/height are aspect-ratio hints to prevent CLS — actual size is
        // controlled by `max-h-10 w-auto` Tailwind classes. Most logos are
        // wider than tall (~4:1) so 160×40 covers the common case.
        width={160}
        height={40}
        className="max-h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
        loading="lazy"
        sizes="(max-width: 640px) 50vw, 160px"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
