import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
