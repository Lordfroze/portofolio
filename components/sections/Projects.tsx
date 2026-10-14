'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icon, type IconName } from '@/components/ui/Icon';
import { projects } from '@/data/projects';

const categoryLabels: Record<string, string> = {
  web: 'Web App',
  mobile: 'Mobile App',
  api: 'API / Backend',
  agribusiness: 'Agribusiness',
};

const categoryIcons: Record<string, IconName> = {
  web: 'Globe',
  mobile: 'Smartphone',
  api: 'Server',
  agribusiness: 'Sprout',
};

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects" size="lg" background="default">
      <SectionHeader
        title="Featured Projects"
        description="Proyek-proyek yang saya bangun, mulai dari aplikasi agribisnis hingga API dan website."
        eyebrow="Portfolio"
        align="center"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <Card
            key={project.id}
            variant="outlined"
            padding="none"
            className="flex flex-col h-full transition-all hover:shadow-lg hover:border-forest-300 dark:hover:border-forest-700 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-video bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center">
                    <Icon name={categoryIcons[project.category]} size={48} className="text-forest-600 dark:text-forest-400" />
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant={project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'warning' : 'info'} size="sm">
                  {project.status}
                </Badge>
                <Badge variant="default" size="sm" className="bg-white/90 dark:bg-charcoal-900/90">
                  {categoryLabels[project.category]}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader className="p-6 pb-0">
              <div className="flex items-center gap-2 text-sm text-charcoal-500 dark:text-charcoal-400 mb-3">
                <Icon name={categoryIcons[project.category]} size={14} />
                <span>{categoryLabels[project.category]}</span>
              </div>
              <CardTitle className="text-xl group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors">
                {project.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 flex-1 flex flex-col">
              <CardDescription className="text-base mb-4 flex-1">
                {project.description}
              </CardDescription>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="default" size="sm" className="bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-300">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge variant="default" size="sm" className="bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-300">
                    +{project.technologies.length - 5} more
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex-wrap">
              {project.liveDemo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <Icon name="ExternalLink" size={14} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.sourceCode && (
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <Icon name="Github" size={14} />
                    Source Code
                  </a>
                </Button>
              )}
              {!project.liveDemo && !project.sourceCode && (
                <Button variant="ghost" size="sm" disabled className="text-charcoal-400 dark:text-charcoal-500">
                  <Icon name="Lock" size={14} className="mr-1.5" />
                  Private Repository
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {projects.length > featuredProjects.length && (
        <div className="mt-12 text-center">
          <Button variant="ghost" size="lg" asChild>
            <a href="#projects">View All Projects ({projects.length})</a>
          </Button>
        </div>
      )}
    </Section>
  );
}