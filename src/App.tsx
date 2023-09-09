import { useEffect } from "react";
import About from "./Components/About";
import Boat from "./Components/Boat";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Home";
import HireMe from "./Components/HireMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  });
  return (
    <>
      <Header />
      <main>
        <Boat />
        <Hero />
        <About />
        <Skills />
        <HireMe />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
