import {
  Navigation,
  Hero,
  LearnWithMe,
  HowITeach,
  BuildYourWebsite,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1" role="main">
        <Hero />
        <LearnWithMe />
        <HowITeach />
        <BuildYourWebsite />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}