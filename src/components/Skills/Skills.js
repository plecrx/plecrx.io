import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../utils/data";
import Stars from "../Stars/Stars";
import {Canvas} from "@react-three/fiber";

export default function Skills() {
    return (
        <section id="skills" className="relative h-screen flex justify-center">
            <Canvas style={{position: "absolute", width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            <div className="container px-5 py-10 mx-auto">

                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Compétences &amp; Technologies
                    </h1>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={`skill-${skill.name}`} className="p-2 sm:w-1/6 w-1/3">
                            <img style={{margin: '10px', height: '75px'}} src={skill.logoLink} alt={skill.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
