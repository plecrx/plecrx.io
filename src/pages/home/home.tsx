import StarsBackground from "../../components/starsBackground/starsBackground";
import React from "react";
import Heroheader from "../../pages/home/sections/heroheader";
import About from "../../pages/home/sections/about";
import Projects from "../../pages/home/sections/projects";
import Skills from "../../pages/home/sections/skills";
import Testimonials from "../../pages/home/sections/testimonials";
import Contact from "../../pages/home/sections/contact";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
`

const Home = () => {
    return (
        <Container>
            <StarsBackground/>
            <Heroheader />
            <About/>
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
        </Container>
    )
}

export default Home
