import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="section-intro">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>Empires are built on ideas. <em>We help you build yours.</em></h2>
        </div>
        <div className="about-content">
          <p>At V3Cares Technologies, we bridge the gap between imagination and innovation—crafting impactful digital solutions while empowering individuals and organizations to achieve more through technology.</p>
          <p><strong>Our mission</strong> is to deliver innovative, reliable, and impactful digital solutions that empower businesses to grow, transform ideas into reality, and equip aspiring developers with the skills and confidence needed to excel.</p>
          <p><strong>Our goal</strong> is to become a trusted technology partner for businesses and startups while nurturing a new generation of skilled developers through practical mentorship.</p>
          <a className="text-link" href="#contact">Get to know us <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="container about-video">
        <iframe src="https://www.youtube.com/embed/oEpnZ9kw2Wc" title="About V3Cares Technologies" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </section>
  );
}