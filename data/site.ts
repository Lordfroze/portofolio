export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:hello@username.dev',
    icon: 'Mail',
    label: 'Kirim email',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'Github',
    label: 'Lihat repositori GitHub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'Linkedin',
    label: 'Terhubung di LinkedIn',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@username',
    icon: 'Youtube',
    label: 'Tonton channel YouTube',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com/username',
    icon: 'Twitter',
    label: 'Ikuti di X',
  },
];

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: 'Portfolio',
  title: 'Yoga — Programmer & Agribusiness',
  description: 'Building Digital Solutions, Growing Real-World Businesses. Programmer dan pelaku agribisnis yang menggabungkan teknologi, pemecahan masalah, dan pengalaman lapangan.',
  url: 'https://username.dev',
  ogImage: '/images/og-image.png',
  author: 'Yoga',
  keywords: [
    'programmer',
    'developer',
    'agribisnis',
    'pertanian',
    'portfolio',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Laravel',
    'React Native',
  ],
};