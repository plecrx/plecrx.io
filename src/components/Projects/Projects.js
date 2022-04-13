import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../utils/data";

const Projects = () => (
    <section id="projects">
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <CodeIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Projets (en construction)
                </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="lg:w-1/3 sm:w-1/2 w-100 p-2">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={project.image}
                            />
                            <div style={{backgroundColor: 'rgb(0,0,0,0.9)'}} className="px-8 py-10 relative z-10 w-full border-2 border-yellow-700 ring-2 ring-yellow-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-700 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Projects
