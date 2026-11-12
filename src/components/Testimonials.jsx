import { Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Working with V3Cares Technologies has been an inspiring experience. Their commitment to innovation, creativity, and delivering technology-driven solutions reflects a genuine passion for excellence. We appreciate their dedication to turning ideas into practical digital solutions and look forward to seeing more of their impact in the tech industry.",
    name: "Windriod Technologies",
    project: "Technology Company"
  },
  {
    quote: "V3Cares Technologies stands out for its creativity, professionalism, and dedication to quality. Their approach to web development and digital innovation demonstrates a strong understanding of how technology can transform ideas into meaningful experiences. They are passionate about what they do, and that passion reflects in their work.",
    name: "Dees Creative Cloud",
    project: "Creative & Digital Solutions"
  },
  {
    quote: "We believe every successful business deserves a strong digital presence, and V3Cares Technologies understands this perfectly. Their commitment to helping businesses grow through technology, innovation, and creative digital solutions is commendable. We appreciate their vision and dedication to helping businesses bring their ideas to life.",
    name: "Celebrity Cleaning Company",
    project: "Cleaning & Facility Services"
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
      
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-card${index === 0 ? " testimonial-card-featured" : ""}`} key={index}>
              <div className="testimonial-card-top">
                <Quote size={24} aria-hidden="true" />
                <span></span>
              </div>
              <p>{testimonial.quote}</p>
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
