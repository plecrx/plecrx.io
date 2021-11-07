import React from "react";
import Typewriter from "typewriter-effect";
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {BsFileArrowDown, FiMail} from "react-icons/all";

export default function Home() {
    return (
        <section id="home" className="h-screen flex justify-center">
            <div className="container my-20 flex lg:flex-row flex-col-reverse items-center absolute lg:bottom-auto bottom-5">
                <div className="flex flex-col flex-grow lg:items-start items-center lg:m-20 xl:px-20 lg:mr-auto">
                    <h1 className="flex flex-col lg:items-start items-center title-font xl:text-5xl sm:text-2xl text-xl font-medium text-white m-3 mb-8" >
                        <div className="md:mr-3 mr-0">Bonjour, je suis</div>

                        <Typewriter onInit={(typewriter)=> {
                                typewriter
                                    .typeString("<strong><label class='text-yellow-600'>Prescilla</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-600'>Développeuse Frontend</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-600'>Développeuse Backend</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-600'>Développeuse Mobile</label></strong>")
                                    .pauseFor(1000)
                                    .start();
                            }} options={{loop: true, autoStart: true}}
                        />
                    </h1>
                    <div className="flex items-stretch gap-3 ml-4">
                        <a href="https://www.linkedin.com/in/plecrx/">
                            <FaLinkedin color="white" size="2em" />
                        </a>
                        <a href="https://github.com/plecurie">
                            <FaGithubSquare color="white" size="2em" />
                        </a>
                        <a href="mailto:prescilla@plecrx.io">
                            <FiMail color="white" size="2em" />
                        </a>
                    </div>

                    <div className="flex justify-center ml-4 mt-10">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                            Télécharger CV
                        </a>
                    </div>
                </div>
                <div className={"ml-20 mr-40"}>
                    <img
                        alt="hero"
                        src="./bitmoji.png"
                    />
                </div>
            </div>
            <svg className="animate-bounce w-10 h-10 mx-auto absolute inset-x-0 bottom-5">
                <a href="#about">
                    <BsFileArrowDown color="white" size="2em" />
                </a>
            </svg>
        </section>
    );
}