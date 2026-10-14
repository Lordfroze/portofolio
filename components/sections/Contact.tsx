'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';
import { socialLinks } from '@/data/site';
import { cn } from '@/lib/utils';

export function Contact() {
  const contactInfo = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email',
      value: 'yogaadipratama22@gmail.com',
      href: 'mailto:yogaadipratama22@gmail.com',
      description: 'Cara terbaik untuk menghubungi saya',
    },
    {
      id: 'github',
      icon: 'Github',
      title: 'GitHub',
      value: '@Lordfroze',
      href: 'https://github.com/Lordfroze',
      description: 'Kode sumber & proyek open source',
      external: true,
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/yoga-adi-pratama-mdn/',
      href: 'https://www.linkedin.com/in/yoga-adi-pratama-mdn/',
      description: 'Jaringan profesional & kolaborasi',
      external: true,
    },
    {
      id: 'youtube',
      icon: 'Youtube',
      title: 'YouTube',
      value: '@pamongtechno',
      href: 'http://youtube.com/@pamongtechno',
      description: 'Tutorial & sharing pengalaman',
      external: true,
    },
  ];

  return (
    <Section id="contact" size="lg" background="dark">
      <SectionHeader
        title="Have an Idea? Let's Build Something Useful."
        description="Terbuka untuk berdiskusi, berkolaborasi, dan mengembangkan ide di bidang teknologi maupun agribisnis."
        eyebrow="Kontak"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item) => (
            <Card key={item.id} variant="outlined" padding="lg" className="border-charcoal-700 bg-charcoal-900/50 hover:border-forest-500/50 hover:bg-charcoal-900 transition-all">
              <CardContent className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest-500/10 flex items-center justify-center">
                  <Icon name={item.icon as IconName} size={24} className="text-forest-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-forest-400 hover:text-forest-300 transition-colors font-mono text-sm mb-2 block"
                  >
                    {item.value}
                  </a>
                  <p className="text-charcoal-400 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card variant="elevated" padding="lg" className="border-charcoal-700 bg-charcoal-900/50 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Kirim Pesan Langsung</h3>
            <p className="text-charcoal-400">Atau gunakan form di bawah ini untuk mengirim pesan langsung ke email saya.</p>
          </div>

          <form className="max-w-xl mx-auto space-y-6" action="https://formspree.io/f/placeholder" method="POST">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  placeholder="email@domain.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-charcoal-300 mb-2">
                Subjek
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
              >
                <option value="collaboration">Kolaborasi Proyek</option>
                <option value="freelance">Freelance / Contract Work</option>
                <option value="agribusiness">Konsultasi Agribisnis</option>
                <option value="speaking">Speaking / Workshop</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-300 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all resize-none"
                placeholder="Ceritakan ide, proyek, atau pertanyaan Anda..."
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              <Icon name="Send" size={18} />
              Kirim Pesan
            </Button>
            <p className="text-xs text-charcoal-500 text-center">
              Dengan mengirim formulir ini, Anda setuju dengan kebijakan privasi kami.
            </p>
          </form>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-charcoal-500 mb-4">Atau hubungi saya melalui media sosial:</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200',
                  'bg-charcoal-800 border border-charcoal-700 text-charcoal-300',
                  'hover:bg-forest-500/10 hover:border-forest-500/50 hover:text-forest-400'
                )}
                aria-label={social.label}
              >
                <Icon name={social.icon as IconName} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}