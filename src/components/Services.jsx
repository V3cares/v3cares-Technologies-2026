import { GraduationCap, MonitorSmartphone, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  { number: "01", title: "Web development", icon: MonitorSmartphone, text: "Polished, responsive websites that help your business communicate better, earn trust, and grow online." },
  { number: "02", title: "Mobile app development", icon: Smartphone, text: "Digital products for iOS and Android, shaped around real people and the way they use technology." },
  { number: "03", title: "Code institutes & mentorship", icon: GraduationCap, text: "Practical learning, real projects, and guidance that help beginners build skills and confidence." }
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading split-heading"><div><p className="eyebrow">WHAT WE DO</p><span className="tiny-note">Ideas deserve to be built.</span></div><h2>We design, build, and mentor with clarity—from first idea to finished product.</h2></div>
        <div className="services-grid">
          {services.map(({number, title, icon: Icon, text}) => <article className="service-card" key={number}>
            <div className="service-top"><span>{number} / SERVICE</span><Icon size={23} strokeWidth={1.6}/></div>
            <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19}/></a>
          </article>)}
        </div>
      </div>
    </section>
  );
}