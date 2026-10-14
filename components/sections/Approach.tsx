'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon, type IconName } from '@/components/ui/Icon';

const approaches = [
  {
    step: '01',
    title: 'Memahami Masalah Terlebih Dahulu',
    description:
      'Sebelum menulis kode, saya berinvestasi waktu untuk benar-benar memahami root cause masalah. Berbicara dengan pemangku kepentingan, mengamati alur kerja nyata, dan mengidentifikasi constraint — baik teknis, bisnis, maupun budaya.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Mencari Solusi yang Praktis',
    description:
      'Saya tidak mencari solusi paling canggih, tapi yang paling tepat. Seringkali solusi sederhana (spreadsheet, script sederhana, no-code) lebih efektif dibanding sistem kompleks. Teknologi harus mengurangi beban, bukan menambahkannya.',
    icon: 'Lightbulb',
  },
  {
    step: '03',
    title: 'Membangun & Menguji Bertahap',
    description:
      'Menggunakan pendekatan iteratif: MVP → feedback → perbaikan. Deploy dini dan sering, mengotomatiskan testing, dan memastikan setiap fitur bisa di-rollback. Membangun fondasi yang kuat sebelum menambah kompleksitas.',
    icon: 'GitBranch',
  },
  {
    step: '04',
    title: 'Memanfaatkan Teknologi Sesuai Kebutuhan',
    description:
      'Tidak terikat pada stack tertentu. Memilih tools yang tepat untuk masalah: Next.js untuk web SEO-critical, React Native untuk mobile, Laravel untuk rapid backend, SQLite untuk local-first apps. Pragmatis, bukan dogmatis.',
    icon: 'Wrench',
  },
  {
    step: '05',
    title: 'Terus Belajar Lewat Proyek Nyata',
    description:
      'Teori tanpa praktik tidak berarti. Setiap proyek — baik client work, personal project, maupun eksperimen di kebun — adalah peluang belajar. Dokumentasi proses, refleksi kegagalan, dan berbagi pengetahuan ke komunitas.',
    icon: 'BookOpen',
  },
];

export function Approach() {
  return (
    <Section id="approach" size="lg" background="muted">
      <SectionHeader
        title="My Approach"
        description="Cara saya bekerja — dari memahami masalah hingga membangun solusi yang benar-benar berguna."
        eyebrow="Metodologi"
        align="center"
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {approaches.map((approach) => (
          <Card key={approach.step} variant="outlined" padding="lg" className="flex gap-6 transition-all hover:shadow-md hover:border-forest-300 dark:hover:border-forest-700">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600 dark:text-forest-400 font-mono">{approach.step}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-forest-900/20 flex items-center justify-center">
                  <Icon name={approach.icon as IconName} size={20} className="text-forest-600 dark:text-forest-400" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white">{approach.title}</h3>
              </div>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed ml-13">{approach.description}</p>
            </div>
          </Card>
        ))}

        <Card variant="elevated" padding="lg" className="text-center border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-900/20">
          <Icon name="Heart" size={32} className="text-forest-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-charcoal-900 dark:text-white mb-3">Saya Mengutamakan Solusi yang Berguna</h3>
          <p className="text-lg text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">
            Bukan sekadar teknologi yang terlihat canggih. Setiap keputusan teknis didasarkan pada: apakah ini memecahkan masalah nyata? Apakah ini mempermudah hidup pengguna? Apakah ini sustainable jangka panjang?
          </p>
        </Card>
      </div>
    </Section>
  );
}