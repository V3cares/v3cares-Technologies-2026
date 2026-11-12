import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import WorkPreview from "./components/WorkPreview.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Approach from "./components/Approach.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <WorkPreview />
        <Testimonials />
        <Approach />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}