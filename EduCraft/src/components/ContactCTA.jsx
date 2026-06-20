import WhatsAppIcon from './WhatsAppIcon';
import { EMAIL, ctaPoints, whatsappLink } from '../constants/siteData';

export default function ContactCTA() {
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Got a project due? Let&apos;s make it shine.</h2>
            <ul className="cta-list">
              {ctaPoints.map((point) => (
                <li key={point}>✓ {point}</li>
              ))}
            </ul>
          </div>
          <div className="cta-actions">
            <a
              href={whatsappLink('Hi Aditi, I have a school project requirement.')}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
