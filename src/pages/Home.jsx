import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ModernVerticalReviews from '../components/ModernVerticalReviews';
import Marquee from '../components/Marquee';
import ProductTabs from '../components/ProductTabs';
import ModernBento from '../components/ModernBento';
import ModernEvolution from '../components/ModernEvolution';
import ModernTeam from '../components/ModernTeam';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ModernBento />
      <ModernEvolution />
      <ProductTabs />
      <Projects />
      <ModernVerticalReviews />
      <ModernTeam />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
