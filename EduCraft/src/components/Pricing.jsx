import FadeIn from './FadeIn';
import { pricingPlans, whatsappLink } from '../constants/siteData';

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Simple, affordable rates for every class</h2>
          <p className="section-desc">
            Starting prices below — final cost may vary by class, topic, and deadline. Message us for
            an exact quote.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <FadeIn key={plan.title} className="fade-in-wrap">
              <article className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}>
                <div className="pricing-icon">{plan.icon}</div>
                <h3>{plan.title}</h3>
                <p className="pricing-amount">{plan.price}</p>
                <p className="pricing-desc">{plan.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="pricing-note">
          <p>Need a quote? Send your class, subject, and deadline on WhatsApp.</p>
          <a
            href={whatsappLink('Hi Aditi, I would like to know the price for a school project.')}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
