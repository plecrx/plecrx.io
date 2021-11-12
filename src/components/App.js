import React from "react";
import './App.css'
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

export default function App() {
    return (
      <main className="text-gray-400 body-font font-mono">
        <Menu />
        <Home />
        <About/>
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    );
}
