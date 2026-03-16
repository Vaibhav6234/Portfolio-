import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <GitHubSection /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
