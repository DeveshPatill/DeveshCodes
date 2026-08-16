'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge } from '@/components/ui';
import { CheckIcon, SparklesIcon, GraduationCapIcon, BookOpenIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { siteConfig, education } from '@/data/portfolio';

const values = [
  { title: 'Clean Code', description: 'Writing maintainable, well-tested code that scales with your team and product.' },
  { title: 'User Experience', description: 'Crafting intuitive interfaces that users love, with attention to accessibility and performance.' },
  { title: 'Continuous Learning', description: 'Staying current with modern technologies while mastering fundamentals that last.' },
  { title: 'Pragmatic Engineering', description: 'Choosing the right tool for the job, balancing innovation with reliability and maintainability.' },
];

export function About() {
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
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" variant="alternate" size="lg" aria-labelledby="about-heading">
      <div className={cn('space-y-16', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            <SparklesIcon size={14} className="mr-1" />
            About Me
          </Badge>
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            {siteConfig.professionalTitle}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">What I Do</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 transition-all hover:border-indigo-200 dark:hover:border-indigo-800"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <CheckIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-950 dark:text-white">{value.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">Availability</h3>
            <div className="space-y-4">
              <Card 
                variant="outlined" 
                padding="md" 
                hover
                className="text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-950 dark:text-white">Private Coding Tutoring</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Available for one-on-one coding sessions with students (Python, SQL, HTML & CSS, JavaScript, React.js)</p>
                  </div>
                </div>
              </Card>
              <Card 
                variant="outlined" 
                padding="md" 
                hover
                className="text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600 dark:text-violet-400">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-950 dark:text-white">Freelance Web Development</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Available for website and web application projects for clients (business sites, e-commerce, custom apps)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white text-center mb-8">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card 
                key={edu.id} 
                variant="outlined" 
                padding="md" 
                hover
                className="text-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    {edu.type === 'degree' ? (
                      <GraduationCapIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <BookOpenIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-zinc-950 dark:text-white">{edu.degree}</h4>
                    {edu.specialization && (
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-0.5">{edu.specialization}</p>
                    )}
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">{edu.institution}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">{edu.location}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {edu.type === 'degree' ? 'Degree' : 'Course'}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}