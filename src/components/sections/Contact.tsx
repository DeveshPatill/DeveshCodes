'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Section, Card, Badge, Input, Textarea, Button } from '@/components/ui';
import { MailIcon, CheckIcon, SendIcon, PhoneIcon, UserIcon, BriefcaseIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/data/portfolio';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type EnquiryType = 'Student / Private Coding Classes' | 'Freelance / Website Development';

interface FormData {
  name: string;
  email: string;
  phone: string;
  enquiry_type: EnquiryType;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  enquiry_type?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  enquiry_type: 'Student / Private Coding Classes',
  subject: '',
  message: '',
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (data.phone.trim() && !/^[\d\s\-\+\(\)]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!data.enquiry_type) {
    errors.enquiry_type = 'Please select an enquiry type';
  }
  
  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  } else if (data.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
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
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormData(initialFormData);
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" variant="alternate" size="xl" aria-labelledby="contact-heading">
      <div className={cn('space-y-12', isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary" size="lg" className="mb-4 inline-block">
            Get In Touch
          </Badge>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Let&apos;s <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Whether you&apos;re a student wanting to learn coding or a client with a project idea, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card variant="outlined" padding="lg">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white mb-6 flex items-center gap-2">
                <UserIcon size={24} className="text-emerald-600 dark:text-emerald-400" />
                For Students
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Want to learn coding privately? I offer one-on-one sessions in Python, SQL, HTML & CSS, JavaScript, and React.js.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}?subject=Private%20Coding%20Classes%20Enquiry`} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MailIcon size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email for Classes</p>
                    <p className="font-medium text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{siteConfig.email}</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card variant="outlined" padding="lg">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white mb-6 flex items-center gap-2">
                <BriefcaseIcon size={24} className="text-violet-600 dark:text-violet-400" />
                For Clients
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Have a website or web application project in mind? Let&apos;s discuss your requirements and build something great together.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}?subject=Freelance%20Project%20Enquiry`} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MailIcon size={24} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email for Projects</p>
                    <p className="font-medium text-zinc-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{siteConfig.email}</p>
                  </div>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                    <p className="font-medium text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{siteConfig.phone}</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          <Card variant="elevated" padding="lg">
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white mb-6">Send a Message</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 animate-fade-in" role="alert">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckIcon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800 dark:text-emerald-200">Message sent successfully!</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">I&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 animate-fade-in" role="alert">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">Failed to send message</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Please try again or email me directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Input
                name="name"
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                disabled={status === 'submitting'}
                autoComplete="name"
              />
              <Input
                name="email"
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                disabled={status === 'submitting'}
                autoComplete="email"
              />
              <Input
                name="phone"
                type="tel"
                label="Phone Number (Optional)"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={status === 'submitting'}
                autoComplete="tel"
              />
              <div>
                <label htmlFor="enquiry_type" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Enquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="enquiry_type"
                  name="enquiry_type"
                  value={formData.enquiry_type}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-zinc-900',
                    'text-zinc-950 dark:text-white',
                    'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
                    'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    errors.enquiry_type
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-zinc-200 dark:border-zinc-700'
                  )}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Student / Private Coding Classes">Student / Private Coding Classes</option>
                  <option value="Freelance / Website Development">Freelance / Website Development</option>
                </select>
                {errors.enquiry_type && (
                  <p className="mt-1.5 text-sm text-red-500" role="alert">{errors.enquiry_type}</p>
                )}
              </div>
              <Input
                name="subject"
                label="Subject"
                placeholder="Brief subject line"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
                disabled={status === 'submitting'}
                autoComplete="off"
              />
              <Textarea
                name="message"
                label="Message"
                placeholder="Tell me about your learning goals or project idea..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                disabled={status === 'submitting'}
                rows={5}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                isLoading={status === 'submitting'}
                disabled={status === 'submitting'}
              >
                <SendIcon size={18} className="mr-2" />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                By submitting this form, you agree to my{' '}
                <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}