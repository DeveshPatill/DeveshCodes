'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge } from '@/components/ui';
import { projects } from '@/data/portfolio';
import { GithubIcon, ExternalLinkIcon, CodeIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured' | 'other'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => !p.featured);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'other', label: 'Other' },
  ] as const;

  return (
    <Section id="projects" variant="alternate" size="xl" aria-labelledby="projects-heading">
      <div className={cn('space-y-12', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            Selected Work
          </Badge>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Projects I&apos;ve <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">built</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A selection of projects showcasing my experience across full-stack development, AI integration, and web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Project filters">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              aria-controls={`projects-panel-${f.key}`}
              id={`projects-tab-${f.key}`}
              onClick={() => setFilter(f.key)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                filter === f.key
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div id="projects-panel" role="tabpanel" aria-label="Projects list">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="elevated" padding="none" hover className="overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video bg-gradient-to-br from-indigo-500/10 to-violet-500/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CodeIcon size={48} className="text-indigo-500/50 dark:text-indigo-400/50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded">
                        {project.date}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="outline" size="sm" role="listitem">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 6 && (
                        <Badge variant="outline" size="sm" className="text-zinc-500 dark:text-zinc-500">
                          +{project.technologies.length - 6} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex flex-wrap gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <GithubIcon size={16} />
                            Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLinkIcon size={16} />
                            Live Demo
                          </a>
                        )}
                        {!project.githubUrl && !project.liveUrl && (
                          <span className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-400 dark:text-zinc-500 rounded-xl">
                            Private Repository
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}