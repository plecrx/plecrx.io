import React, {Fragment} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "../layouts/footer";
import LegalNotice from "../sections/legalNotice";
import Menu from "../components/menu/menu";
import Home from "../sections/home";
import About from "../sections/about";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import Testimonials from "../sections/testimonials";
import Contact from "../sections/contact";
import StarsBackground from "../components/starsBackground/starsBackground";
import './app.css'

const App = () => {
    const location = useLocation();
    const mainScreen =
        <Fragment>
            <StarsBackground/>
            <Home />
            <StarsBackground/>
            <About/>
            <StarsBackground/>
            <Projects />
            <StarsBackground/>
            <Skills />
            <StarsBackground/>
            <Testimonials />
            <Contact />
        </Fragment>

    return (
        <div className="text-gray-400 body-font font-mono ">
            <main className={'overflow-x-hidden'}>
                <Menu />
                {location.pathname !== '/legal-notice' && mainScreen}
                <Routes>
                    <Route exact path='/legal-notice' element={<LegalNotice/>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App
