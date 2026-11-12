import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (!response.ok) {
        throw new Error(`Netlify form submission failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Netlify form submission failed.", error);
      setStatus("error");
    }
  }
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div><p className="eyebrow red">START THE CONVERSATION</p><h2>Have an idea worth <em>building?</em></h2><p className="muted contact-lede">Tell us what you are building, where you are now, and how we can help. We would love to hear your idea.</p><a className="text-link" href="mailto:Orjiuchechukwu80@gmail.com">Orjiuchechukwu80@gmail.com <ArrowUpRight size={16}/></a></div>
        <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Leave this field empty: <input name="bot-field" /></label></p>
          <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="How should we call you?" required />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required />
          <label htmlFor="project">Tell us about your project</label><textarea id="project" name="project" rows="4" placeholder="A little about your idea..." required />
          <button className="button button-red" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : "Send enquiry"} <Send size={16}/></button>
          {status === "success" && <p className="form-note" role="status">Thanks for reaching out. Your message has been received.</p>}
          {status === "error" && <p className="form-note" role="alert">Your message could not be sent. Please try again or email us directly.</p>}
        </form>
      </div>
    </section>
  );
}