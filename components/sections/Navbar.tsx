'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';
import { socialLinks } from '@/data/site';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Agribusiness', href: '#agribusiness' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16" aria-label="Main navigation" />
    );
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-charcoal-950/90 backdrop-blur-md shadow-sm border-b border-charcoal-100 dark:border-charcoal-800'
          : 'bg-transparent'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href="#home"
            className="text-xl font-bold text-charcoal-900 dark:text-white hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            Y<span className="text-forest-600">o</span>ga
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-charcoal-600 dark:text-charcoal-300 hover:text-forest-600 dark:hover:text-forest-400 transition-colors relative"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-600 scale-x-0 origin-bottom-right transition-transform duration-300 hover:scale-x-100 hover:origin-bottom-left" />
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="#contact">Hubungi Saya</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-600 dark:text-charcoal-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 rounded-lg transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 space-y-3 border-t border-charcoal-100 dark:border-charcoal-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-2 text-base font-medium text-charcoal-600 dark:text-charcoal-300 hover:text-forest-600 dark:hover:text-forest-400 transition-colors rounded-lg hover:bg-charcoal-50 dark:hover:bg-charcoal-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-charcoal-100 dark:border-charcoal-800">
              <Button variant="primary" size="md" className="w-full" asChild>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Saya</Link>
              </Button>
              <div className="flex items-center gap-4">
                {socialLinks.slice(0, 4).map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-charcoal-500 hover:text-forest-600 dark:text-charcoal-400 dark:hover:text-forest-400 transition-colors rounded-lg hover:bg-charcoal-100 dark:hover:bg-charcoal-800"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon as IconName} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}