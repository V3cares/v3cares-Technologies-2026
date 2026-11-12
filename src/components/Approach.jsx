import { ArrowDownRight } from "lucide-react";

const steps = [
  ["01", "Understand the idea", "We listen closely to your goals, audience, and the problem you want to solve."],
  ["02", "Shape the solution", "We define the right strategy, experience, and technical direction before we build."],
  ["03", "Build with care", "We create, refine, and launch with quality, communication, and long-term value in mind."]
];

export default function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container approach-grid">
        <div className="approach-visual"><img src="/images/blessing.jpg" alt="Developers collaborating on a project" onError={(e) => {e.currentTarget.style.display="none";}}/><div className="approach-fallback"><span>OUR PROCESS</span><strong>Listen. Shape. Build.</strong></div><span className="vertical-label">THOUGHTFUL BY DESIGN</span></div>
        <div className="approach-copy"><p className="eyebrow">HOW WE WORK</p><h2>Good digital products begin with <em>good conversations.</em></h2><p className="muted">We take time to understand your vision, shape the right direction, and build solutions that are useful, sustainable, and ready for growth.</p>
          <div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowDownRight size={18}/></div>)}</div>
        </div>
      </div>
    </section>
  );
}