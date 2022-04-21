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
import styled from "@emotion/styled";

const StyledBody = styled.div`
  background-color: #212226;
  font-family: 'Josefin Sans', sans-serif;
`

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
            <StarsBackground/>
            <Contact />
        </Fragment>

    return (
        <StyledBody className="text-gray-400 body-font font-mono w-full ">
            <main className={'overflow-x-hidden'}>
                <Menu />
                {location.pathname !== '/legal-notice' && mainScreen}
                <Routes>
                    <Route path='/legal-notice' element={<LegalNotice/>}/>
                </Routes>
            </main>
            <Footer />
        </StyledBody>
    );
}

export default App
