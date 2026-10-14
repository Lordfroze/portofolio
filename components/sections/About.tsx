'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Card, CardContent } from '@/components/ui/Card';

export function About() {
  const experiences = [
    {
      icon: 'Code',
      title: 'Pengembangan Aplikasi',
      description:
        'Membangun aplikasi web dan mobile modern menggunakan React, Next.js, React Native, dan Expo. Fokus pada clean code, performa, dan pengalaman pengembang yang baik.',
    },
    {
      icon: 'Server',
      title: 'Backend & API Development',
      description:
        'Mengembangkan REST API dan GraphQL dengan Node.js, Express, Laravel, dan PostgreSQL. Berpengalaman dengan autentikasi, database design, caching, dan deployment.',
    },
    {
      icon: 'Leaf',
      title: 'Agribisnis & Pertanian',
      description:
        'Terlibat langsung dalam budidaya sayuran, pengelolaan operasional usaha pertanian, pencatatan keuangan, dan eksperimen pemupukan. Memahami tantangan nyata di lapangan.',
    },
    {
      icon: 'Zap',
      title: 'Teknologi untuk Pertanian',
      description:
        'Menggabungkan keahlian programming dengan pengalaman agribisnis untuk menciptakan solusi digital praktis: pencatatan panen, manajemen stok, jadwal tanam, dan analisis keuangan.',
    },
  ];

  return (
    <Section id="about" size="lg" background="muted">
      <SectionHeader
        title="About Me"
        description="Cerita singkat tentang perjalanan saya di dunia pemrograman dan agribisnis."
        eyebrow="Profil"
        align="center"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="prose prose-charcoal dark:prose-invert max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            Saya memulai perjalanan di dunia pemrograman dengan rasa ingin tahu bagaimana membangun sesuatu yang berguna. 
            Seiring waktu, minat ini berkembang ke pengembangan aplikasi full-stack: frontend dengan React dan Next.js, 
            backend dengan Node.js dan Laravel, serta mobile development menggunakan React Native dan Expo.
          </p>
          <p className="mb-6">
            Di sisi lain, saya juga aktif dalam agribisnis dan pertanian. Pengalaman langsung di lapangan — budidaya sayuran, 
            pengelolaan pupuk dan irigasi, pencatatan keuangan usaha, hingga pemasaran hasil panen — memberi saya perspektif unik 
            tentang tantangan yang dihadapi petani dan pelaku usaha pertanian skala kecil.
          </p>
          <p className="mb-6">
            Kedua dunia ini bukan terpisah. Saya percaya teknologi seharusnya memecahkan masalah nyata, bukan menciptakan 
            kompleksitas baru. Pengalaman di kebun mengajarkan saya pentingnya solusi yang praktis, efisien, dan sesuai 
            dengan kebutuhan sehari-hari — prinsip yang saya bawa ke setiap baris kode yang saya tulis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Card key={exp.title} variant="outlined" padding="md" className="transition-all hover:shadow-md hover:border-forest-300 dark:hover:border-forest-700">
              <CardContent className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center">
                  <Icon name={exp.icon as IconName} size={24} className="text-forest-600 dark:text-forest-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">{exp.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-8 border-t border-charcoal-200 dark:border-charcoal-800">
          <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-4 text-center">Nilai yang Saya Pegang</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              { icon: 'Lightbulb', title: 'Praktis > Canggih', desc: 'Solusi yang bisa dipakai, bukan yang hanya terlihat keren' },
              { icon: 'Target', title: 'Masalah Dulu, Kode Kemudian', desc: 'Memahami root cause sebelum menulis solusi' },
              { icon: 'BookOpen', title: 'Belajar Lewat Proyek Nyata', desc: 'Teori tanpa praktik tidak berarti di lapangan' },
            ].map((value) => (
              <div key={value.title} className="p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-charcoal-100 dark:border-charcoal-800">
                <Icon name={value.icon as IconName} size={24} className="text-forest-600 dark:text-forest-400 mx-auto mb-3" />
                <h4 className="font-medium text-charcoal-900 dark:text-white mb-1">{value.title}</h4>
                <p className="text-sm text-charcoal-600 dark:text-charcoal-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}