import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', size = 'lg', id, children, ...props }, ref) => {
    const variants = {
      default: 'bg-white dark:bg-zinc-950',
      alternate: 'bg-zinc-50 dark:bg-zinc-900',
      dark: 'bg-zinc-950 dark:bg-black',
    };
    
    const sizes = {
      sm: 'py-12 sm:py-16',
      md: 'py-16 sm:py-20 lg:py-24',
      lg: 'py-20 sm:py-24 lg:py-28 xl:py-32',
      xl: 'py-24 sm:py-28 lg:py-32 xl:py-36',
      full: 'min-h-screen flex items-center justify-center',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(variants[variant], sizes[size], className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[90rem]',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';