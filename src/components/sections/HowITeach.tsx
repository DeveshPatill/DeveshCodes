'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge } from '@/components/ui';
import { CheckIcon, SparklesIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { teachingMethods } from '@/data/portfolio';

export function HowITeach() {
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
    const element = document.getElementById('how-i-teach');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="how-i-teach" variant="default" size="xl" aria-labelledby="how-i-teach-heading">
      <div className={cn('space-y-12', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            <SparklesIcon size={14} className="mr-1" />
            How Learning Works
          </Badge>
          <h2 id="how-i-teach-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            How <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">I Teach</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A structured approach focused on understanding, not just memorizing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingMethods.map((method, index) => (
            <Card 
              key={method.id} 
              variant="outlined" 
              padding="lg" 
              hover
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                <CheckIcon size={28} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white mb-2">{method.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{method.description}</p>
            </Card>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            No placement guarantees. No fake promises. Just clear, practical coding guidance.
          </p>
        </div>
      </div>
    </Section>
  );
}