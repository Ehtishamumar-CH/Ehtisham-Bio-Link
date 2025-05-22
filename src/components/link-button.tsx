import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinkButtonProps {
  href: string;
  icon: React.ReactElement;
  text: string;
  className?: string;
}

export function LinkButton({ href, icon, text, className }: LinkButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "w-full justify-start text-base sm:text-lg h-14 sm:h-16 shadow-md hover:shadow-lg focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 ease-in-out", // Added transform and hover effects
        "bg-gradient-to-r from-[#5381B2] to-[#C2E8FF]", // Gradient background
        "text-accent-foreground", // Text color for contrast on the gradient
        "hover:from-[#456A8F] hover:to-[#A0D8FF]", // Darker gradient on hover
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4">
        {React.cloneElement(icon, { className: cn("h-5 w-5 sm:h-6 sm:w-6 shrink-0", icon.props.className) })}
        <span className="truncate">{text}</span>
      </Link>
    </Button>
  );
}
