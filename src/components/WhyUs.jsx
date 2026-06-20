import FadeIn from './FadeIn';
import { features, whatsappLink } from '../constants/siteData';

export default function WhyUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <span className="section-tag">Why EduCraft?</span>
            <h2 className="section-title">We sweat the small stuff so your child can shine.</h2>
            <p className="why-story">
              EduCraft Projects was founded by <strong>Aditi Goyal</strong>, a passionate entrepreneur
              who understands the pressure students and parents face during project season. We combine
              creativity with academic rigor to deliver work that teachers appreciate and students are
              proud to submit.
            </p>
            <a
              href={whatsappLink("Hi Aditi, I'd like to know more about EduCraft.")}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Story →
            </a>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
