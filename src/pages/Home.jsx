import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
// import Projects from '../components/Projects';
// import ModernVerticalReviews from '../components/ModernVerticalReviews';
import Marquee from '../components/Marquee';
import ProductTabs from '../components/ProductTabs';

import ModernEvolution from '../components/ModernEvolution';
import ModernTeam from '../components/ModernTeam';
// import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { BannerAd } from '../components/BannerAd';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />

      <ModernEvolution />
      <ProductTabs />
      {/* <Projects /> */}
      {/* <ModernVerticalReviews /> */}
      <ModernTeam />
      {/* <CTA /> */}
      <div style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <BannerAd />
      </div>
      <Footer />
    </>
  );
};

export default Home;
