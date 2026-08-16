import { SVGAttributes } from 'react';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

const iconBaseProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function GithubIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83 7.72 7.72 0 002.3-2.42 4.48 4.48 0 00.5-2.5" />
    </svg>
  );
}

export function EmailIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

export function MenuIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function XIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function MailIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

export function MapPinIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function DownloadIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function CodeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function SparklesIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773l-1.591-1.591M12 5.25V3m4.227 4.773l1.591-1.591M18.75 12h2.25m-4.773 4.227l1.591 1.591" />
    </svg>
  );
}

export function RocketIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c1.26-1.5 1.77-3.84.25-5.29l7.3-7.3c1.45-1.45 3.81-1.45 5.26 0a6.74 6.74 0 010 9.55L10.5 21.75c-1.45 1.45-3.76 1.94-5.28.5A6.77 6.77 0 014.5 16.5Z" />
      <path d="m14.5 10.5-4.5 4.5" />
      <path d="m8 18-4 4" />
    </svg>
  );
}

export function GlobeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export function SunIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function MoonIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export function CheckIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <line x1="18" y1="18" x2="6" y2="6" />
      <polyline points="6 6 6 18 18 18" />
    </svg>
  );
}

export function SendIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function Building2Icon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18" />
      <path d="M6 12H4a2 2 0 00-2 2v8a2 2 0 002 2h2" />
      <path d="M18 9h2a2 2 0 012 2v11a2 2 0 01-2 2h-2" />
      <rect x="6" y="6" width="4" height="4" />
      <rect x="14" y="6" width="4" height="4" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function GraduationCapIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M21.42 10.922a1.125 1.125 0 00-.198-.315l-2.822-3.658a.567.567 0 00-.409-.041l-2.75.387a1.125 1.125 0 00-.795.878L8.083 19.13a1.125 1.125 0 00.118.727.562.562 0 00.515.171h8.487a.562.562 0 00.515-.171 1.125 1.125 0 00.118-.727l-.781-4.723a1.125 1.125 0 00-.795-.878l-2.75-.387a.567.567 0 00-.409.041l-2.822 3.658a1.125 1.125 0 00-.198.315.563.563 0 00.496.816l4.267.976-.26 2.987a.563.563 0 00.802.794l3.056-.813c.473.132.96.1321.434 0l3.057.813a.563.563 0 00.801-.794l-.26-2.987 4.267-.976a.563.563 0 00.496-.816z" />
      <path d="M12 16.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );
}

export function BookOpenIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}

export function UserIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg {...iconBaseProps} width={size} height={size} className={className} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}