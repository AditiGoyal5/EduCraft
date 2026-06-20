import { marqueeItems } from '../constants/siteData';

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section" aria-label="Services offered">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>★ {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
