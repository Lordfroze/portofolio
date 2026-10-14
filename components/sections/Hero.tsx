'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';

export function Hero() {
  return (
    <Section id="home" size="xl" background="dark" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-forest-600/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-forest-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-forest-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-forest-500/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/10 text-forest-400 text-sm font-medium mb-8 animate-fade-in">
          <Icon name="Sprout" size={16} />
          <span>Technology meets Agriculture</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
          Building Digital Solutions,<br />
          <span className="text-forest-400">Growing Real-World Businesses.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-charcoal-300 leading-relaxed mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          Saya seorang programmer dan pelaku agribisnis yang menggabungkan teknologi, pemecahan masalah, dan pengalaman lapangan untuk membangun solusi yang bermanfaat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Button size="lg" variant="primary" asChild>
            <a href="#projects">Explore My Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Let's Collaborate</a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-charcoal-500 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-2">
            <Icon name="Code" size={18} />
            <span className="text-sm font-medium">JavaScript / TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="GitBranch" size={18} />
            <span className="text-sm font-medium">React / Next.js / Node.js</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Leaf" size={18} />
            <span className="text-sm font-medium">Agribusiness & Farming</span>
          </div>
        </div>

        <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-charcoal-800 bg-charcoal-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500/10 via-transparent to-charcoal-900" />
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4 text-charcoal-400">
                  <div className="w-16 h-16 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center">
                    <Icon name="Terminal" size={32} className="text-forest-400" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center">
                    <Icon name="Sprout" size={32} className="text-forest-400" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center">
                    <Icon name="Database" size={32} className="text-forest-400" />
                  </div>
                </div>
                <div className="font-mono text-sm text-charcoal-500 space-y-2 text-left max-w-md mx-auto">
                  <p><span className="text-forest-400">$</span> npm run dev</p>
                  <p><span className="text-forest-400">$</span> git commit -m "feat: integrate farm management"</p>
                  <p><span className="text-forest-400">$</span> deploy --target production</p>
                  <p className="text-forest-400">✓ Building solutions that grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <Icon name="MousePointer2" size={24} className="text-charcoal-500" />
      </div>
    </Section>
  );
}