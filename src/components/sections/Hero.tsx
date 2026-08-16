'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon, DownloadIcon, PhoneIcon } from '@/components/ui/Icons';
import { socialLinks, siteConfig } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-violet-500/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={cn('space-y-8', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 text-sm font-medium text-indigo-700 dark:text-indigo-300">
              <SparklesIcon size={14} />
              <span>Private coding sessions & freelance web development</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-zinc-950 dark:text-white"
            >
              {siteConfig.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed">
              {siteConfig.professionalTitle}
            </p>

            <p className="text-base text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <span>📍</span>
              {siteConfig.location}
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed mt-4">
              Private coding sessions for students and freelance web development for clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" className="group" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn With Me
                <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Hire Me
              </Button>
              <a
                href="/resume/Devesh-Patil-Resume.pdf"
                download="Devesh-Patil-Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <DownloadIcon size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-label={social.name}
                  >
                    {{
                      github: <GithubIcon size={20} />,
                      linkedin: <LinkedinIcon size={20} />,
                      email: <MailIcon size={20} />,
                    }[social.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={cn('relative', isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0')}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl animate-pulse-slow" aria-hidden="true" />
              <div className="relative bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-2xl shadow-zinc-900/10 dark:shadow-black/30 overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.title} - ${siteConfig.professionalTitle}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center p-6">
                      <SparklesIcon size={48} className="text-indigo-500 mx-auto mb-4" />
                      <p className="text-zinc-600 dark:text-zinc-400">Profile Image</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">Add your photo to public/images/profile.jpeg</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center animate-float" aria-hidden="true">
                <SparklesIcon size={32} className="text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl shadow-lg shadow-violet-500/30 flex items-center justify-center animate-float delay-1000" aria-hidden="true">
                <ArrowRightIcon size={24} className="text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center animate-float delay-2000" aria-hidden="true">
                <PhoneIcon size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}