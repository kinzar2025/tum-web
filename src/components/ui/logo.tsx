'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Logo Icon */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="33%" stopColor="#3B82F6" />
            <stop offset="66%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="8"
          fill="url(#logoGradient)"
        />
        <path
          d="M12 14h16M12 20h10M12 26h14"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="26" r="3" fill="white" />
      </svg>

      {/* Logo Text */}
      {showText && (
        <span className="font-bold text-xl tracking-tight">
          <span className="text-gradient">TUM</span>
          <span className="text-foreground-light dark:text-foreground-dark">-WEB</span>
        </span>
      )}
    </div>
  );
}
