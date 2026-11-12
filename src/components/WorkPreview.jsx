import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  { name: "Young & Gifted Coding Institute", type: "Learning platform", image: "/images/young&gifted.png", description: "A welcoming place for new developers to learn, build, and grow.", url: "https://youngandgifted.netlify.app/" },
  { name: "Chowcred Eatry", type: "Eatry website", image: "/images/cocred.png", description: "ChowCred Eatery is your go-to destination for delicious, freshly prepared meals made with love and quality ingredients. We bring great taste, satisfying portions, and an enjoyable food experience right to your table. Whether you're dining in or ordering your favourite meals, ChowCred Eatery is committed to making every bite memorable.", url: "https://chowcred.netlify.app/" },
  { name: "Portfolio experience", type: "Eatry Platform", image: "/images/victory.png", description: "A clean, responsive showcase built to tell a developer’s story.", url: "https://victoryuche26.netlify.app/" }
];

export default function WorkPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImage, setFailedImage] = useState(null);
  const project = projects[active];
  const move = (direction) => setActive((current) => (current + direction + projects.length) % projects.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="section work-section" id="work" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container">
        <div className="section-heading work-heading"><div><p className="eyebrow red">SELECTED WORK</p><h2>A few things we’ve <em>put into the world.</em></h2></div><p className="work-intro">A quick preview of projects shaped by curiosity, collaboration, and care.</p></div>
        <div className="work-slider" aria-live="polite">
          <div className="work-image-wrap" key={project.image}>
            <img className="work-image" src={project.image} alt={`${project.name} project preview`} onError={() => setFailedImage(project.image)} />
            {failedImage === project.image && <div className="work-image-fallback"><span>V3Cares / {String(active + 1).padStart(2, "0")}</span><strong>{project.name}</strong><small>PROJECT PREVIEW</small></div>}
            <span className="work-image-index">0{active + 1} — 0{projects.length}</span>
          </div>
          <div className="work-details" key={project.name}>
            <p className="eyebrow red">{project.type}</p>
            <h3>{project.name}</h3><p>{project.description}</p>
            <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Explore project <ExternalLink size={16}/></a>
            <div className="slider-controls">
              <span>{String(active + 1).padStart(2, "0")} <i>/</i> {String(projects.length).padStart(2, "0")}</span>
              <div><button aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft size={18}/></button><button aria-label="Next project" onClick={() => move(1)}><ArrowRight size={18}/></button></div>
            </div>
            <div className="slider-progress">{projects.map((item, index) => <button key={item.name} aria-label={`Show ${item.name}`} className={index === active ? "progress-active" : ""} onClick={() => setActive(index)} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}