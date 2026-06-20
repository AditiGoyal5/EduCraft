import FadeIn from './FadeIn';
import { services } from '../constants/siteData';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Everything your school project needs</h2>
          <p className="section-desc">
            From primary school craft work to senior secondary practical files — we deliver creative,
            neat, and academically accurate projects.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <FadeIn key={service.title} className="fade-in-wrap">
              <article className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
