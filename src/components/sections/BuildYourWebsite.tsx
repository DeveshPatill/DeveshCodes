'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge, Button } from '@/components/ui';
import { ArrowRightIcon, SparklesIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { freelanceServices } from '@/data/portfolio';

export function BuildYourWebsite() {
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
    const element = document.getElementById('services');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="services" variant="alternate" size="xl" aria-labelledby="services-heading">
      <div className={cn('space-y-16', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            <SparklesIcon size={14} className="mr-1" />
            Build Your Website
          </Badge>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Freelance Web <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Development</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Have an idea for a website or web application? I work with clients to turn their ideas into practical, responsive digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceServices.map((service, index) => (
            <Card 
              key={service.id} 
              variant="outlined" 
              padding="lg" 
              hover
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white mb-3">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <div className="text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-2xl mx-auto">
              Have a website idea?
            </p>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Project
              <ArrowRightIcon size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}