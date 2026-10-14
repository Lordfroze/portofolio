import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'dark';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, size = 'lg', background = 'default', children, id, ...props }, ref) => {
    const sizes = {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-20',
      lg: 'py-20 md:py-28',
      xl: 'py-24 md:py-32',
    };

    const backgrounds = {
      default: 'bg-white dark:bg-charcoal-950',
      muted: 'bg-charcoal-50 dark:bg-charcoal-900',
      dark: 'bg-charcoal-900 dark:bg-charcoal-950',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(sizes[size], backgrounds[background], className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
}

export const SectionHeader = ({
  title,
  description,
  align = 'left',
  eyebrow,
  className,
  children,
  ...props
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto max-w-3xl',
  };

  return (
    <div className={cn('mb-12 md:mb-16', alignClasses[align], className)} {...props}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-forest-600 bg-forest-100 dark:bg-forest-900/30 dark:text-forest-400 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-white tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export { Section };