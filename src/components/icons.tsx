// Iconos SVG inline, minimalistas, trazo consistente (stroke 1.75) — sin librerías externas.
import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4.5C4 4 4.4 3.6 4.9 3.6h3c.4 0 .8.3.9.7l1 3.4c.1.4 0 .8-.3 1.1L8 10.3a13 13 0 0 0 5.7 5.7l1.5-1.5c.3-.3.7-.4 1.1-.3l3.4 1c.4.1.7.5.7.9v3c0 .5-.4.9-.9.9C11.8 20 4 12.2 4 4.5Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 3.9v2.4H7.8v3h2.6V21h3.1Z" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3.5Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 16v2M19 16v2" />
      <path d="M3.5 16v-3l1.7-4.6A2 2 0 0 1 7.1 7h9.8a2 2 0 0 1 1.9 1.4L20.5 13v3h-17Z" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v10H9.5L5 19v-3.5H4v-10Z" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.6 3 7.9 7 9 4-1.1 7-4.4 7-9V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

// Huella estilizada — inspirada en el pictograma real del logotipo de Podología
// Figueroa (icono de huella visible en su perfil de Instagram). Interpretación
// tipográfica propia; no es una reproducción del archivo original del logo.
export function FootprintIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9.3 21c-1.7 0-2.8-1.4-2.6-3.4.3-2.6-.4-3.5-.9-5C5.2 10.8 5 9.6 5 8.4 5 5.4 7 3 9.6 3c2.7 0 4.3 2.5 4.3 6.3 0 2.1-.4 3.2-.8 4.5-.5 1.5-.9 2.9-.6 5.1.2 1.5-1 2.1-3.2 2.1Z" />
      <circle cx="17.3" cy="6.3" r="1.6" />
      <circle cx="19.4" cy="9.6" r="1.4" />
      <circle cx="19.8" cy="13.3" r="1.2" />
      <circle cx="19" cy="16.7" r="1" />
    </svg>
  );
}

export function GaitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 20c0-3 1-4 1-6s-1-2-1-4a3 3 0 0 1 6 0c0 1.5-.6 2-.9 3.3" />
      <path d="M18 4c0 3-1 4-1 6s1 2 1 4a3 3 0 0 1-6 0c0-1.5.6-2 .9-3.3" />
    </svg>
  );
}

export function DropletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5Z" />
    </svg>
  );
}

export function InsoleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 21c-1.8 0-3-1.4-2.8-3.6.3-2.7-.5-3.6-1-5.2C3.7 10.6 3.5 9.3 3.5 8c0-3.2 2.1-5.7 4.9-5.7 3 0 4.7 2.7 4.7 6.8 0 2.2-.4 3.4-.9 4.8-.5 1.6-1 3.1-.7 5.4" />
      <path d="M12.5 15.5c2.8 1.6 5.5 1.3 7-1.2" />
    </svg>
  );
}

export function ScalpelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5 20.5 9.5 10 20 4 20 4 14 14.5 3.5Z" />
      <path d="M13 6 18 11" />
    </svg>
  );
}

export function NeedleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4 4 20" />
      <path d="M17 4.5 19.5 7M13.5 8 16 10.5M10 11.5l2.5 2.5M6.5 15l2.5 2.5" />
      <circle cx="5.5" cy="18.5" r="1.5" />
    </svg>
  );
}

export function BandageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-20 12 12)" />
      <circle cx="8.7" cy="9.6" r="1" fill="currentColor" stroke="none" transform="rotate(-20 12 12)" />
      <circle cx="15.3" cy="14.4" r="1" fill="currentColor" stroke="none" transform="rotate(-20 12 12)" />
    </svg>
  );
}

export function BabyFootIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 20c-1.5 0-2.3-1.1-2.1-2.7.2-1.9-.3-2.6-.7-3.7-.4-1-.5-1.9-.5-2.7 0-2.2 1.4-3.9 3.3-3.9s3.3 2 3.3 4.9c0 1.6-.3 2.4-.6 3.4-.4 1.1-.7 2.2-.5 3.9.1 1.1-.7 1.8-2.2 1.8Z" />
      <circle cx="16.5" cy="5.4" r="1.2" />
      <circle cx="18.1" cy="7.9" r="1" />
    </svg>
  );
}

export function HeartHandsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-6.5-4-8.5-8.2C2.2 8.8 4 6.5 6.5 6.5c1.5 0 2.8.8 3.5 2 .7-1.2 2-2 3.5-2 2.5 0 4.3 2.3 3 5.3C14.5 16 12 20 12 20Z" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.5 2.8 1 3.6 4 4-3 .4-3.5 1.2-4 4-.5-2.8-1-3.6-4-4 3-.4 3.5-1.2 4-4Z" />
      <path d="M19 14c.3 1.5.6 1.9 2 2.2-1.4.3-1.7.7-2 2.2-.3-1.5-.6-1.9-2-2.2 1.4-.3 1.7-.7 2-2.2Z" />
    </svg>
  );
}

export function ImagePlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m5 17 4.5-4.5c.6-.6 1.4-.6 2 0L15 16" />
      <path d="m12.5 17 2-2c.6-.6 1.4-.6 2 0l2.5 2.5" />
    </svg>
  );
}
