import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Projects = dynamic(() => import('../containers/Projects'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      {/* <Education /> */}
      {/* <Experience /> */}
      <Projects />
      {showContactUs ? <Contact /> : null}
      <GithubProfileCard />
    </div>
  );
}
