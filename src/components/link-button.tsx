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
      variant="default" // Uses primary color (orange)
      className={cn(
        "w-full justify-start text-base sm:text-lg h-14 sm:h-16 shadow-md hover:shadow-lg transition-shadow duration-150 ease-in-out focus:ring-2 focus:ring-ring focus:ring-offset-2",
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
