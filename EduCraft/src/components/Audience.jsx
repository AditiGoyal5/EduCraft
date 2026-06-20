import FadeIn from './FadeIn';
import { audience } from '../constants/siteData';

export default function Audience() {
  return (
    <section className="section audience">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Who We Serve</span>
          <h2 className="section-title">Trusted by students, parents & schools</h2>
        </div>
        <div className="audience-grid">
          {audience.map((item) => (
            <FadeIn key={item.title} className="fade-in-wrap">
              <div className="audience-card">
                <span className="audience-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
