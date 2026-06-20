import { Fragment } from 'react';
import FadeIn from './FadeIn';
import { steps } from '../constants/siteData';

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">How it works</span>
          <h2 className="section-title">From idea to submission in 3 simple steps.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <FadeIn className="step-card-wrap">
                <div className="step-card">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </FadeIn>
              {index < steps.length - 1 && <div className="step-connector" aria-hidden="true" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
