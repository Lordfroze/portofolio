import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Agribusiness } from '@/components/sections/Agribusiness';
import { Skills } from '@/components/sections/Skills';
import { Approach } from '@/components/sections/Approach';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Agribusiness />
      <Skills />
      <Approach />
      <Contact />
    </>
  );
}