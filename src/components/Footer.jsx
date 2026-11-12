import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-row"><div><a className="brand footer-brand" href="#top">V3<span>Cares</span><small> TECHNOLOGIES</small></a><p>Building the future with your ideas.</p></div><div className="footer-right"><a href="#top">Back to top <ArrowUpRight size={15}/></a><span>© {new Date().getFullYear()} V3Cares Technologies</span></div></div></footer>;
}