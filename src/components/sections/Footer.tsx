'use client';

import Link from 'next/link';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { socialLinks, siteConfig } from '@/data/portfolio';

const footerLinks = {
  Learn: [
    { label: 'Learn With Me', href: '#learn' },
    { label: 'How I Teach', href: '#how-i-teach' },
    { label: 'Subjects', href: '#skills' },
  ],
  Services: [
    { label: 'Business Websites', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'Custom Web Apps', href: '#services' },
    { label: 'Full-Stack Development', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  Resources: [
    { label: 'GitHub', href: socialLinks[0].url, external: true },
    { label: 'LinkedIn', href: socialLinks[1].url, external: true },
    { label: 'Email', href: socialLinks[2].url, external: false },
    { label: 'Resume', href: '/resume/Devesh-Patil-Resume.pdf' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 dark:bg-black border-t border-zinc-800" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-6">
            <Link href="#" className="text-2xl font-bold text-white" aria-label="Go to homepage">
              DeveshCodes
            </Link>
            <p className="text-zinc-400 leading-relaxed max-w-xs">
              Learn. Build. Create.
            </p>
            <p className="text-zinc-500 text-sm">
              {siteConfig.professionalTitle}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
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

          <nav aria-label="Learn links">
            <h4 className="font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.Learn.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                    onClick={link.href.startsWith('#') ? (e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services links">
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                    onClick={link.href.startsWith('#') ? (e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                    onClick={link.href.startsWith('#') ? (e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    download={!link.external && link.href.endsWith('.pdf') ? undefined : undefined}
                  >
                    {link.label}
                    {link.external && <ArrowRightIcon size={14} className="text-zinc-500" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <div className="flex items-center gap-4">
              <a href="#home" className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-sm">
                <ArrowRightIcon size={14} className="-rotate-90" />
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}