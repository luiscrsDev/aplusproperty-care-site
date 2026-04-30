import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "navy";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  // Default CTA — bold APLUS red, the warmest call-to-action surface on the page.
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/25 hover:shadow-lg transition-all",
  // Navy alt — for secondary CTAs (e.g. "See Plans") on warm cream backgrounds.
  navy: "bg-brand-navy text-white hover:bg-brand-navy-hover shadow-sm shadow-black/10 transition-colors",
  secondary:
    "bg-white text-brand-navy border border-brand-navy/20 hover:border-brand-navy/40 transition-colors",
  ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5 transition-colors",
  outline:
    "bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-colors",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-7 py-3.5 text-base font-medium",
};

type ButtonProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
) & {
  variant?: Variant;
  size?: Size;
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight whitespace-nowrap";
  const merged = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("as" in props && props.as === "a") {
    const { as: _as, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: "a";
    };
    return (
      <a className={merged} {...anchorRest}>
        {children}
      </a>
    );
  }
  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={merged} {...buttonRest}>
      {children}
    </button>
  );
}
