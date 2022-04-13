import React from 'react'
import {AnnotationIcon} from "@heroicons/react/solid";
import Accordion from './components/Accordion/Accordion'
import { about } from "../../utils/data";
import {Canvas} from "@react-three/fiber";
import Stars from "../Stars/Stars";

const About = () => {

    return (
        <section id="about" className="relative h-screen flex justify-center">
            <Canvas style={{position: "absolute", width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AnnotationIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        À propos de moi
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <Accordion data={about} />
                </div>
            </div>
        </section>
    )
}

export default About
