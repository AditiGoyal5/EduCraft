import WhatsAppIcon from './WhatsAppIcon';
import { EMAIL, whatsappLink } from '../constants/siteData';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">For Classes 1 – 12</span>
          <h1 className="hero-title">
            Creative School Projects
            <br />
            <span className="hero-highlight">Made Easy.</span>
          </h1>
          <p className="hero-desc">
            Hand-crafted practical files, working models, charts, and exhibitions — researched, neat,
            and ready to submit.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink('Hi Aditi, I need help with a school project.')}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Inquire on WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline btn-lg">
              Send Email
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              Browse Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
