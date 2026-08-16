'use client';

import { useEffect, useState } from 'react';
import { Section, Card, Badge } from '@/components/ui';
import { skills, skillCategories } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, string> = {
  languages: '💻',
  frontend: '🌐',
  backend: '⚙️',
  databases: '🗄️',
  data: '📊',
  tools: '🔧',
  ai: '🤖',
};

// Technologies I teach (subset of skills)
const teachingTechNames = ['Python', 'SQL', 'HTML5', 'CSS3', 'JavaScript / ES6+', 'React.js'];

export function Skills() {
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
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Split skills into "I Teach" and "I Use"
  const teachingSkills = skills.filter(s => teachingTechNames.includes(s.name));
  const usingSkills = skills;

  return (
    <Section id="skills" variant="default" size="xl" aria-labelledby="skills-heading">
      <div className={cn('space-y-12', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            Technical Skills
          </Badge>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Technologies I <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Teach</span> & <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Use</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A clear separation between what I teach privately and what I use professionally for development.
          </p>
        </div>

        {/* Technologies I Teach */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white text-center mb-8">
            Technologies I <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Teach</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingSkills
              .sort((a, b) => b.proficiency - a.proficiency)
              .map((skill, index) => (
                <Card 
                  key={skill.name} 
                  variant="outlined" 
                  padding="lg" 
                  hover
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{categoryIcons[skill.category]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                    {skillCategories.find(c => c.key === skill.category)?.label}
                  </p>
                  <Badge 
                    variant="outline" 
                    size="md" 
                    className="group-hover:border-emerald-300 dark:group-hover:border-emerald-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/10 transition-all"
                  >
                    {skill.proficiency}%
                  </Badge>
                </Card>
              ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700" />

        {/* Technologies I Use */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white text-center mb-8">
            Technologies I <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Use</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .map((category, catIndex) => {
                const categorySkills = usingSkills.filter(s => s.category === category.key);
                if (categorySkills.length === 0) return null;
                
                return (
                  <Card key={category.key} variant="outlined" padding="lg" hover className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {categoryIcons[category.key]}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{category.label}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{categorySkills.length} technologies</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2.5" role="list" aria-label={`${category.label} skills`}>
                      {categorySkills
                        .sort((a, b) => b.proficiency - a.proficiency)
                        .map((skill, skillIndex) => (
                          <div 
                            key={skill.name} 
                            role="listitem"
                            className="group relative"
                            style={{ animationDelay: `${(catIndex * 5 + skillIndex) * 30}ms` }}
                          >
                            <Badge 
                              variant="outline" 
                              size="md" 
                              className="group-hover:border-indigo-300 dark:group-hover:border-indigo-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/10 transition-all"
                            >
                              {skill.name}
                              <span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400 dark:text-zinc-500">
                                {skill.proficiency}%
                              </span>
                            </Badge>
                          </div>
                        ))}
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <Card variant="glass" padding="lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Always Learning</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Currently exploring: Advanced TypeScript patterns, AI/ML model deployment, and cloud-native architectures. 
                  Open to collaborating on interesting projects!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}