'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" size="lg" background="default">
      <SectionHeader
        title="Skills & Technologies"
        description="Teknologi dan keahlian yang saya gunakan sehari-hari, dikelompokkan untuk memudahkan dipindai."
        eyebrow="Keahlian"
        align="center"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.id} variant="outlined" padding="lg" className="h-full transition-all hover:shadow-lg hover:border-forest-300 dark:hover:border-forest-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center">
                <Icon name={category.icon as IconName} size={24} className="text-forest-600 dark:text-forest-400" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-900 dark:text-white">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-charcoal-900 dark:text-white">{skill.name}</span>
                    {skill.level && (
                      <Badge
                        variant={
                          skill.level === 'Advanced' ? 'success' :
                          skill.level === 'Intermediate' ? 'info' : 'default'
                        }
                        size="sm"
                        className="text-xs"
                      >
                        {skill.level}
                      </Badge>
                    )}
                  </div>
                  <div className="h-1.5 bg-charcoal-100 dark:bg-charcoal-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest-500 rounded-full transition-all duration-700 ease-out group-hover:opacity-100"
                      style={{
                        width: `${skill.level === 'Advanced' ? 90 : skill.level === 'Intermediate' ? 65 : 40}%`,
                      }}
                    />
                  </div>
                  {skill.description && (
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card variant="outlined" padding="lg" className="bg-charcoal-50 dark:bg-charcoal-900 border-charcoal-200 dark:border-charcoal-700">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-charcoal-100 dark:bg-charcoal-800 flex items-center justify-center">
              <Icon name="Target" size={24} className="text-charcoal-600 dark:text-charcoal-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 dark:text-white mb-2">Fokus Pengembangan Saat Ini</h3>
              <ul className="space-y-2 text-charcoal-600 dark:text-charcoal-300">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-forest-600 dark:text-forest-400 flex-shrink-0" />
                  <span>Meningkatkan keahlian React Native & Expo untuk aplikasi mobile production-ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-forest-600 dark:text-forest-400 flex-shrink-0" />
                  <span>Mendalami TypeScript advanced patterns & type-safe API development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-forest-600 dark:text-forest-400 flex-shrink-0" />
                  <span>Mengembangkan KebunKita hingga production-ready untuk petani nyata</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-forest-600 dark:text-forest-400 flex-shrink-0" />
                  <span>Eksperimen IoT sederhana untuk monitoring kelembaban tanah & nutrisi</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}