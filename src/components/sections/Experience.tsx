'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge } from '@/components/ui';
import { experience } from '@/data/portfolio';
import { CheckIcon, CodeIcon, Building2Icon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

const typeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'contract': 'Contract',
  'internship': 'Internship',
  'freelance': 'Freelance',
};

const typeColors: Record<string, string> = {
  'full-time': 'emerald',
  'contract': 'blue',
  'internship': 'violet',
  'freelance': 'amber',
};

function formatDate(dateStr: string): string {
  if (dateStr === 'Currently Pursuing') return 'Currently Pursuing';
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);

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
    const element = document.getElementById('experience');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="experience" variant="default" size="xl" aria-labelledby="experience-heading">
      <div className={cn('space-y-12', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            Professional Experience
          </Badge>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Experience <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">& Internships</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            My journey building backend systems, APIs, and AI-powered applications through internships and projects.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500" aria-hidden="true" />
          
          <div className="space-y-8 pl-8">
            {experience.map((job, index) => (
              <article 
                key={job.id} 
                className="relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-8 top-2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-950 shadow-lg" aria-hidden="true" />
                </div>
                
                <Card variant="outlined" padding="lg" hover className="group relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                        <CodeIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{job.role}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end text-right">
                      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{formatDate(job.startDate)} - {job.endDate === 'Present' ? 'Present' : formatDate(job.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <Badge 
                        variant="outline" 
                        size="sm" 
                        className={cn(
                          `border-${typeColors[job.type]}-300 text-${typeColors[job.type]}-700 dark:text-${typeColors[job.type]}-300 hover:bg-${typeColors[job.type]}-50 dark:hover:bg-${typeColors[job.type]}-900/20`
                        )}
                      >
                        {typeLabels[job.type]}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{job.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-zinc-950 dark:text-white mb-3 flex items-center gap-2">
                        <CheckIcon size={18} className="text-emerald-500" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2" role="list">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" aria-hidden="true" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-zinc-950 dark:text-white mb-3 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" size="sm" role="listitem">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <Card variant="glass" padding="lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Building2Icon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Open to Opportunities</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                  I&apos;m currently exploring Full-Stack Developer, Software Developer, and Backend Developer roles. 
                  Also open to interesting freelance projects and contract engagements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}