import PageBackground from './components/PageBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <PageBackground />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Audience />
        <Pricing />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
