import React, {Fragment} from "react";
import './App.css'
import Footer from "./Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import LegalNotice from "./LegalNotice/LegalNotice";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

export default function App() {

    let location = useLocation();

    const mainpage =
        <Fragment>
            <Home />
            <About/>
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />

        </Fragment>

    return (
        <body className="text-gray-400 body-font font-mono">
            <main>
                <Menu />
                {location.pathname !== '/legal-notice' && mainpage}
                <Routes>
                    <Route exact path='/legal-notice' element={<LegalNotice/>}/>
                </Routes>
            </main>
            <Footer />
        </body>
    );
}
