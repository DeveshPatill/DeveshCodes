import { Metadata } from 'next';
import { Section } from '@/components/ui';
import { siteConfig } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Alex Developer portfolio website.',
};

export default function TermsPage() {
  return (
    <Section variant="default" size="xl" id="terms" aria-labelledby="terms-heading">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h1 id="terms-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">2. Use of Website</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This website is a personal portfolio showcasing professional work, skills, and experience. You may browse the content 
              for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works of any 
              content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">3. Intellectual Property</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, code snippets, and project 
              descriptions, is the intellectual property of Alex Developer or the respective project owners/clients. 
              Project code repositories linked on this site are subject to their own licenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">4. Contact Form Usage</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              The contact form is provided for legitimate inquiries regarding professional opportunities, collaborations, 
              or general questions. You agree not to use the contact form for spam, marketing solicitations, 
              or any unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">5. External Links</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This website contains links to third-party websites (GitHub, LinkedIn, Twitter, project demos). 
              These links are provided for convenience only. We do not endorse, control, or assume responsibility 
              for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either express or implied. 
              We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In no event shall Alex Developer be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your access to or use of this website, including any damages resulting from reliance on information 
              presented herein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">8. Changes to Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
              to this page. Your continued use of the website following any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">9. Governing Law</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of California, 
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">10. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If you have any questions about these terms, please contact us at 
              <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">{siteConfig.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}