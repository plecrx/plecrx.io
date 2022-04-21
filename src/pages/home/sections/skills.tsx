import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../../utils/data";

const Skills = () => (
    <section id="skills" className="h-full flex justify-center">
        <div className="container px-5 py-10 mx-auto">

            <div className="text-center mb-20">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Compétences &amp; Technologies
                </h1>
            </div>

            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-evenly">
                {skills.map((skill) => (
                    <div key={`skill-${skill.name}`} className="p-2 sm:w-1/6 w-1/3 bg-gray-500 bg-opacity-20 m-4 rounded-xl flex justify-center items-center">
                        <img style={{margin: '10px', height: '75px', alignSelf: 'center'}} src={skill.logoLink} alt={skill.name} />
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Skills
