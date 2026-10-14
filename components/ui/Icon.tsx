'use client';

import { SVGAttributes } from 'react';
import { cn } from '@/lib/utils';
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Menu,
  X,
  ExternalLink,
  Code,
  Server,
  Leaf,
  Zap,
  Lightbulb,
  Target,
  BookOpen,
  Search,
  GitBranch,
  Wrench,
  Heart,
  Check,
  Sprout,
  Briefcase,
  FlaskConical,
  Cpu,
  Globe,
  Smartphone,
  Database,
  Terminal,
  Send,
  Lock,
  MousePointer2,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
} from 'lucide-react';

export type IconName = 
  | 'Mail' | 'Github' | 'Linkedin' | 'Youtube' | 'Twitter'
  | 'Menu' | 'X' | 'ExternalLink'
  | 'Code' | 'Server' | 'Leaf' | 'Zap' | 'Lightbulb' | 'Target' | 'BookOpen' | 'Search' | 'GitBranch' | 'Wrench' | 'Heart' | 'Check'
  | 'Sprout' | 'Briefcase' | 'FlaskConical' | 'Cpu' | 'Globe' | 'Smartphone' | 'Database' | 'Terminal' | 'Send' | 'Lock' | 'MousePointer2'
  | 'AArrowDown' | 'AArrowUp' | 'ALargeSmall';

interface LucideProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  absoluteStrokeWidth?: boolean;
}

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Menu,
  X,
  ExternalLink,
  Code,
  Server,
  Leaf,
  Zap,
  Lightbulb,
  Target,
  BookOpen,
  Search,
  GitBranch,
  Wrench,
  Heart,
  Check,
  Sprout,
  Briefcase,
  FlaskConical,
  Cpu,
  Globe,
  Smartphone,
  Database,
  Terminal,
  Send,
  Lock,
  MousePointer2,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn('flex-shrink-0', className)}
      {...props}
    />
  );
}

Icon.displayName = 'Icon';