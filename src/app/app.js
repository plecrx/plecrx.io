import React, {Fragment} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "../layouts/footer";
import LegalNotice from "../pages/legalNotice/legalNotice";
import Menu from "../components/menu/menu";
import Heroheader from "../pages/home/heroheader";
import About from "../pages/home/about";
import Projects from "../pages/home/projects";
import Skills from "../pages/home/skills";
import Testimonials from "../pages/home/testimonials";
import Contact from "../pages/home/contact";
import StarsBackground from "../components/starsBackground/starsBackground";
import './app.css'

const App = () => {
    const location = useLocation();
    const mainScreen =
        <Fragment>
            <StarsBackground/>
            <Heroheader />
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
