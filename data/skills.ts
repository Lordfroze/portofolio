export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-backend',
    title: 'Programming & Backend',
    icon: 'Code',
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Laravel', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'REST API', level: 'Advanced' },
      { name: 'GraphQL', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Prisma ORM', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    icon: 'Globe',
    skills: [
      { name: 'HTML & CSS', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React Native', level: 'Intermediate' },
      { name: 'Expo', level: 'Intermediate' },
      { name: 'React Query', level: 'Intermediate' },
      { name: 'Zustand', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools-infrastructure',
    title: 'Tools & Infrastructure',
    icon: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Linux & Server Admin', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'CI/CD (GitHub Actions)', level: 'Intermediate' },
      { name: 'Vercel / Netlify', level: 'Advanced' },
      { name: 'Nginx', level: 'Beginner' },
      { name: 'Redis', level: 'Beginner' },
    ],
  },
  {
    id: 'agribusiness',
    title: 'Agribusiness',
    icon: 'Sprout',
    skills: [
      { name: 'Budidaya Sayuran', level: 'Intermediate', description: 'Pengalaman hands-on budidaya sayuran hidroponik dan konvensional' },
      { name: 'Operasional Agribisnis', level: 'Intermediate', description: 'Pengelolaan usaha pertanian skala kecil hingga menengah' },
      { name: 'Pencatatan & Keuangan Usaha', level: 'Advanced', description: 'Sistem pencatatan keuangan dan stok untuk pertanian' },
      { name: 'Pemupukan & Perawatan Tanaman', level: 'Intermediate', description: 'Pengetahuan praktis jadwal pupuk, pengendalian hama, irigasi' },
      { name: 'Digitalisasi Pertanian', level: 'Intermediate', description: 'Ide dan implementasi teknologi untuk efisiensi pertanian' },
    ],
  },
];