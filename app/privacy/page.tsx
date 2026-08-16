import { Metadata } from 'next';
import { Section } from '@/components/ui';
import { siteConfig } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Alex Developer portfolio website.',
};

export default function PrivacyPage() {
  return (
    <Section variant="default" size="xl" id="privacy" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h1 id="privacy-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you interact with our website, 
              including when you fill out the contact form. This information may include your name, email address, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We use the information we collect to respond to your inquiries, improve our services, and communicate with you 
              about relevant updates. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">3. Contact Form Data</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When you submit the contact form, your data is sent to our server and may be stored temporarily for the purpose 
              of responding to your message. We do not use this data for marketing purposes or share it with third parties 
              without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">4. Cookies and Analytics</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This website does not use tracking cookies or third-party analytics services. We respect your privacy and 
              do not track your browsing behavior across other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">5. External Links</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our website may contain links to external websites (GitHub, LinkedIn, Twitter). We are not responsible 
              for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">6. Data Security</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We implement reasonable security measures to protect your personal information. However, no method of 
              transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">7. Your Rights</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              You have the right to access, correct, or delete your personal information. To exercise these rights, 
              please contact us at <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">{siteConfig.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated 
              effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">9. Contact Us</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at 
              <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">{siteConfig.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}