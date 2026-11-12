const members = [
  { number: "01", role: "CEO & Founder", name: "Victory Uchechukwu Orji", image: "/images/ceofounder.jpg", text: "Leads the vision at V3Cares, helping clients turn bold ideas into useful digital products with clarity and purpose." },
  { number: "02", role: "Chief of Operations", name: "Moses Ifeanyi Orji", image: "/images/moses.png", text: "Drives brand strategy and marketing initiatives that connect with audiences and strengthen our market presence." },
  { number: "03", role: "Business Strategist", name: "Hadassah Temitope Oyesanya", image: "/images/haddasah.jpg", text: "Connects product thinking with business goals, ensuring each decision supports long-term growth." }
];

export default function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="section-heading team-heading"><div><p className="eyebrow">THE PEOPLE BEHIND THE WORK</p></div><div><h2>A focused team helping ideas become meaningful products.</h2><p>We bring together strategy, design, and technology to help our clients build with intention and move with confidence.</p></div></div>
        <div className="team-grid">{members.map((member) => <article className="team-card" key={member.number}>
          <div className="team-photo"><img src={member.image} alt={member.name} onError={(e) => {e.currentTarget.style.display="none";}}/><span>{member.number}</span><div className="photo-fallback">V3C</div></div>
          <div className="team-info"><p className="eyebrow red">{member.role}</p><h3>{member.name}</h3><p>{member.text}</p></div>
        </article>)}</div>
      </div>
    </section>
  );
}