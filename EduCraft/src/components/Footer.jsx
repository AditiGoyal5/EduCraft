import Logo from './Logo';
import { EMAIL, WHATSAPP_NUMBER, navLinks } from '../constants/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">Creative School Projects Made Easy</p>
          <p className="footer-location">📍 Paonta Sahib, Himachal Pradesh</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 82191 84202
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 EduCraft Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
