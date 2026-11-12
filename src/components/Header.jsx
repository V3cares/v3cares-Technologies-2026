import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "#services"], ["Our work", "#work"], ["Testimonials", "#testimonials"], ["Approach", "#approach"],
  ["Team", "#team"], ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>V3<span>Cares</span><small> TECHNOLOGIES</small></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-red nav-cta" href="#contact">Start a project <ArrowUpRight size={17} /></a>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={16} /></a>
      </nav>}
    </header>
  );
}