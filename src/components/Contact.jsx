import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`V3Cares enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject details:\n${data.get("project")}`);
    window.location.href = `mailto:Orjiuchechukwu80@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div><p className="eyebrow red">START THE CONVERSATION</p><h2>Have an idea worth <em>building?</em></h2><p className="muted contact-lede">Tell us what you are building, where you are now, and how we can help. We would love to hear your idea.</p><a className="text-link" href="mailto:Orjiuchechukwu80@gmail.com">Orjiuchechukwu80@gmail.com <ArrowUpRight size={16}/></a></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="How should we call you?" required />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required />
          <label htmlFor="project">Tell us about your project</label><textarea id="project" name="project" rows="4" placeholder="A little about your idea..." required />
          <button className="button button-red" type="submit">Send enquiry <Send size={16}/></button>
          {sent && <p className="form-note" role="status">Your email app should open with your enquiry ready to send.</p>}
        </form>
      </div>
    </section>
  );
}