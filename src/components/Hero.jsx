import { ArrowRight, MoveDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero dark-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow red"><Sparkles size={14} /> Technology. Innovation. Education.</p>
          <h1>Building the future <em>with your ideas.</em></h1>
          <p className="hero-lede">We partner with founders, teams, and aspiring developers to turn ideas into powerful websites, mobile products, and practical growth.</p>
          <div className="hero-actions">
            <a className="button button-red" href="#contact">Let’s build together <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="#services">Explore our services <MoveDown size={16} /></a>
          </div>
          <div className="hero-stats">
            <div><strong>20+</strong><span>Projects delivered</span></div>
            <div><strong>3</strong><span>Core services</span></div>
            <div><strong>100%</strong><span>Built with care</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/blessing.jpg" alt="Professionals collaborating around a laptop" onError={(e) => {e.currentTarget.style.display="none";}} />
          <div className="hero-visual-fallback"><span>V3</span><p>Ideas into impact.</p><small>DESIGN · DEVELOPMENT · MENTORSHIP</small></div>
          <div className="image-caption"><span>01 / THE V3CARES APPROACH</span><span>Made with intention.</span></div>
        </div>
      </div>
    </section>
  );
}