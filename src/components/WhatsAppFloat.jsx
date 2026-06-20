import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../constants/siteData';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('Hi Aditi, I need help with a school project.')}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </a>
  );
}
