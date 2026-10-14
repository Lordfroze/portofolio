import Link from 'next/link';
import { formatYear } from '@/lib/utils';
import { Icon, type IconName } from '@/components/ui/Icon';
import { siteConfig, socialLinks } from '@/data/site';

const footerNavigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Agribusiness', href: '#agribusiness' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="#home" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity inline-block mb-4">
              Y<span className="text-forest-500">o</span>ga
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6 max-w-xs">
              Programmer & pelaku agribisnis. Membangun solusi digital yang praktis untuk masalah nyata di lapangan.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 text-charcoal-400 flex items-center justify-center hover:bg-forest-500/10 hover:border-forest-500/50 hover:text-forest-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as IconName} size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-charcoal-400 hover:text-forest-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Projects">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Proyek Unggulan</h3>
            <ul className="space-y-3">
              <li><Link href="#projects" className="text-charcoal-400 hover:text-forest-400 transition-colors text-sm">KebunKita</Link></li>
              <li><Link href="#projects" className="text-charcoal-400 hover:text-forest-400 transition-colors text-sm">Personal Website</Link></li>
              <li><Link href="#projects" className="text-charcoal-400 hover:text-forest-400 transition-colors text-sm">Mobile Application</Link></li>
              <li><Link href="#projects" className="text-charcoal-400 hover:text-forest-400 transition-colors text-sm">API & Backend</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kontak</h3>
            <address className="not-italic text-charcoal-400 text-sm space-y-3">
              <a href="mailto:yogaadipratama22@gmail.com" className="hover:text-forest-400 transition-colors block">yogaadipratama22@gmail.com</a>
              <p>Indonesia</p>
              <p className="text-xs">Terbuka untuk kolaborasi remote & on-site</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-sm">
              &copy; {formatYear()} {siteConfig.author}. Dibangun dengan Next.js, TypeScript, & Tailwind CSS.
            </p>
            <div className="flex items-center gap-6 text-xs text-charcoal-500">
              <Link href="/privacy" className="hover:text-forest-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-forest-400 transition-colors">Terms of Service</Link>
              <span>Made with <Icon name="Heart" size={12} className="text-forest-500 inline" aria-hidden="true" /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}