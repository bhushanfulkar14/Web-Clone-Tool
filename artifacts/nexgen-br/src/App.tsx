import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Courses } from "@/components/Courses";
import { Internship } from "@/components/Internship";
import { Projects } from "@/components/Projects";
import { Hire } from "@/components/Hire";
import { Reviews } from "@/components/Reviews";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export type SectionId =
  | "home"
  | "about"
  | "services"
  | "courses"
  | "internship"
  | "projects"
  | "hire"
  | "blog"
  | "reviews"
  | "contact";

function App() {
  const [active, setActive] = useState<SectionId>("home");

  const navigate = (id: SectionId) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30">
      <Navbar active={active} onNavigate={navigate} />

      <main className="pt-16">
        {active === "home"      && <Hero onNavigate={navigate} />}
        {active === "about"     && <About />}
        {active === "services"  && <Services />}
        {active === "courses"   && <Courses />}
        {active === "internship"&& <Internship />}
        {active === "projects"  && <Projects />}
        {active === "hire"      && <Hire />}
        {active === "blog"      && <Blog />}
        {active === "reviews"   && <Reviews />}
        {active === "contact"   && <Contact />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
