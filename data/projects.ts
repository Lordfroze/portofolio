export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  liveDemo?: string;
  sourceCode?: string;
  status: 'In Progress' | 'Completed' | 'Planned';
  category: 'web' | 'mobile' | 'api' | 'agribusiness';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'kebunkita',
    name: 'KebunKita',
    description: 'Aplikasi pengelolaan agribisnis untuk pencatatan keuangan, stok pupuk, jadwal tanam, dan monitoring panen. Dibangun untuk kebutuhan nyata di lapangan.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'React Navigation'],
    image: '/images/kebunkita.png',
    liveDemo: undefined,
    sourceCode: 'https://github.com/lordfroze/kebunkita',
    status: 'In Progress',
    category: 'agribusiness',
    featured: true,
  },
  {
    id: 'personal-website',
    name: 'Personal Website',
    description: 'Website personal dan blog teknologi untuk berbagi pengetahuan, dokumentasi proyek, dan tulisan seputar pengembangan software serta agribisnis.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel'],
    image: '/images/personal-website.png',
    liveDemo: 'https://yogatama.web.id/',
    sourceCode: 'https://github.com/lordfroze/portofolio',
    status: 'Completed',
    category: 'web',
    featured: true,
  },
  {
    id: 'mobile-app',
    name: 'Mobile Application',
    description: 'Aplikasi Android yang dibangun menggunakan React Native dan Expo untuk memudahkan akses layanan digital di perangkat mobile.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React Query', 'AsyncStorage'],
    image: '/images/mobileapp.jpg',
    liveDemo: undefined,
    sourceCode: '',
    status: 'In Progress',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'api-backend',
    name: 'API & Backend Projects',
    description: 'Kumpulan proyek API dan backend untuk berbagai kebutuhan: autentikasi, manajemen data, integrasi layanan ketiga, dan microservices.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/api-backend.png',
    liveDemo: undefined,
    sourceCode: '',
    status: 'Completed',
    category: 'api',
    featured: true,
  },
];