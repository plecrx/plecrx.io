import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-800 bg-opacity-9 body-font font-mono">
        <Navbar />
        <Home />
        <About/>
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
  );
}
