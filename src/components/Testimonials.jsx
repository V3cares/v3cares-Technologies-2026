import { Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Share a client-approved quote about how the team helped bring an idea to life.",
    name: "Client name",
    project: "Project or company"
  },
  {
    quote: "Add a few words from a client about the collaboration, process, or final result.",
    name: "Client name",
    project: "Project or company"
  },
  {
    quote: "Replace this sample with genuine feedback that reflects your client's experience.",
    name: "Client name",
    project: "Project or company"
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading testimonials-heading">
          <div>
            <p className="eyebrow red">CLIENT TESTIMONIALS</p>
            <h2>Good work is even better when it’s <em>shared.</em></h2>
          </div>
          <p className="testimonials-note">
            Sample copy for now. Replace these with approved client quotes before publishing.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-card${index === 0 ? " testimonial-card-featured" : ""}`} key={index}>
              <div className="testimonial-card-top">
                <Quote size={24} aria-hidden="true" />
                <span>Sample quote</span>
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <cite>{testimonial.name}</cite>
                  <span>{testimonial.project}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
