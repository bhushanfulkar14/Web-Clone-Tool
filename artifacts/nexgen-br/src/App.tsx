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

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <Internship />
        <Projects />
        <Hire />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
