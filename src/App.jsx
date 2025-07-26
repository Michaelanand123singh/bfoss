import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Statistics from './components/sections/Statistics';
import Projects from './components/sections/Projects';
import Partners from './components/sections/Partners';
import Community from './components/sections/Community';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Projects />
        <Partners />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;