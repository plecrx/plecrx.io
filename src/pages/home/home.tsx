import React from "react";
import Heroheader from "../../pages/home/sections/heroheader";
import About from "../../pages/home/sections/about";
import Projects from "../../pages/home/sections/projects";
import Skills from "../../pages/home/sections/skills";
import Testimonials from "../../pages/home/sections/testimonials";
import Contact from "../../pages/home/sections/contact";
import styled from "@emotion/styled";
import {Canvas} from "@react-three/fiber";
import Stars from "../../components/stars/stars";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
`

const Home = () => {
    return (
        <Container>
            <Canvas style={{position: "absolute", width: '100%', height: '100%'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
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
