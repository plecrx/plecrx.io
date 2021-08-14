import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About";

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font font-mono">
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
