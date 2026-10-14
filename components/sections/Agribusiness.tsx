'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';

const agriActivities = [
  {
    id: 'vegetable-farming',
    title: 'Budidaya Sayuran',
    icon: 'Sprout',
    description:
      'Mengelola budidaya sayuran hidroponik (NFT, DFT) dan konvensional: lettuce, kailan, bayam, selada, dan tanaman daun lainnya. Pengalaman hands-on dari penyiapan media tanam, penanaman bibit, hingga panen.',
    highlights: ['Hidroponik NFT/DFT', 'Konvensional (tanah)', 'Manajemen nutrisi', 'Pengendalian hama terpadu'],
    image: '/images/farming-vegetables.jpg',
  },
  {
    id: 'business-management',
    title: 'Pengelolaan Usaha Agribisnis',
    icon: 'Briefcase',
    description:
      'Mengelola operasional usaha pertanian skala kecil-menengah: perencanaan tanam, pembelian input pertanian, manajemen tenaga kerja, pencatatan keuangan, hingga pemasaran hasil panen ke pasar lokal.',
    highlights: ['Perencanaan musiman', 'Manajemen keuangan', 'Pemasaran hasil panen', 'Supply chain management'],
    image: '/images/farming-business.jpg',
  },
  {
    id: 'fertilization-experiments',
    title: 'Eksperimen Pemupukan & Perawatan',
    icon: 'FlaskConical',
    description:
      'Melakukan eksperimen mandiri dengan berbagai jenis pupuk organik dan anorganik, pupuk cair, kompos, serta biostimulan. Mencatat pertumbuhan, hasil panen, dan efisiensi biaya untuk menemukan protokol terbaik per komoditas.',
    highlights: ['Pupuk organik vs anorganik', 'Pupuk cair & foliar', 'Komposting mandiri', 'Monitoring pertumbuhan'],
    image: '/images/farming-fertilizer.jpg',
  },
  {
    id: 'tech-in-agriculture',
    title: 'Pemanfaatan Teknologi di Pertanian',
    icon: 'Cpu',
    description:
      'Membangun dan menggunakan alat bantu digital: aplikasi pencatatan panen & keuangan, monitoring jadwal tanam & pemupukan, manajemen stok pupuk/benih, serta analisis keuntungan per komoditas dan musim tanam.',
    highlights: ['Aplikasi pencatatan panen', 'Jadwal tanam & pupuk otomatis', 'Manajemen stok digital', 'Analisis keuangan per komoditas'],
    image: '/images/farming-tech.jpg',
  },
];

const futureIdeas = [
  'Platform marketplace langsung petani-konsumen',
  'Sistem monitoring IoT untuk kelembaban tanah & nutrisi',
  'Aplikasi prediksi panen berbasis data historis',
  'Marketplace input pertanian (pupuk, benih, alat) terintegrasi logistik',
  'Pendidikan digital untuk petani muda',
];

export function Agribusiness() {
  return (
    <Section id="agribusiness" size="lg" background="muted">
      <SectionHeader
        title="Agribusiness & Agriculture"
        description="Agribisnis adalah bagian nyata dari aktivitas saya, bukan sekadar hobi. Berikut pengalaman dan eksplorasi saya di dunia pertanian."
        eyebrow="Lapangan"
        align="center"
      />

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {agriActivities.map((activity) => (
            <Card key={activity.id} variant="outlined" padding="none" className="overflow-hidden transition-all hover:shadow-lg hover:border-forest-300 dark:hover:border-forest-700">
              <div className="relative aspect-[4/3] bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden">
                {activity.image ? (
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name={activity.icon as IconName} size={48} className="text-forest-500/50" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Icon name={activity.icon as IconName} size={24} className="text-forest-600 dark:text-forest-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">{activity.title}</h3>
                <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.highlights.map((highlight) => (
                    <Badge key={highlight} variant="default" size="sm" className="bg-forest-50 dark:bg-forest-900/20 text-forest-700 dark:text-forest-300 border border-forest-200 dark:border-forest-800">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card variant="elevated" padding="lg" className="border border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-900/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center">
              <Icon name="Lightbulb" size={28} className="text-forest-600 dark:text-forest-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">Ide Pengembangan Digitalisasi Pertanian</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 mb-6">
                Berdasarkan pengalaman lapangan, saya melihat peluang besar untuk menerapkan teknologi dalam memecahkan masalah nyata petani:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-charcoal-700 dark:text-charcoal-300">
                {futureIdeas.map((idea) => (
                  <li key={idea} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={12} className="text-forest-600 dark:text-forest-400" />
                    </span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <p className="text-charcoal-600 dark:text-charcoal-400 max-w-2xl mx-auto">
            <strong className="text-charcoal-900 dark:text-white">Teknologi bukan tujuan akhir, melainkan alat.</strong> 
            Setiap solusi digital yang saya bangun dilandasi pemahaman langsung tentang apa yang dibutuhkan di kebun — 
            bukan asumsi dari ruang meeting.
          </p>
        </div>
      </div>
    </Section>
  );
}