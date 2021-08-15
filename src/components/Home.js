
import React from "react";
import Typewriter from "typewriter-effect";
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {BsFileArrowDown, FiMail} from "react-icons/all";

export default function Home() {
    return (
        <section id="home" className="h-screen">
            <div className="container mx-auto my-auto px-10 py-20 flex lg:flex-row flex-col flex-col-reverse items-center">
                <div className="flex-grow sm:w-1/2 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font lg:text-3xl md:text-base text-base font-medium text-white flex flex-col lg:flex-row m-4" >
                        <div className="lg:mr-4 md:mr-3 mr-0">Bonjour, je suis</div>

                        <Typewriter onInit={(typewriter)=> {
                                typewriter
                                    .typeString("<strong><label class='text-green-500'>Prescilla.</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-blue-500'>Développeuse Frontend.</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-pink-500'>Développeuse Backend.</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-400'>Développeuse Mobile.</label></strong>")
                                    .pauseFor(1000)
                                    .start();
                            }} options={{loop: true, autoStart: true}}
                        />
                    </h1>
                    <div className={"flex items-stretch gap-3 ml-4"}>
                        <a href={"https://www.linkedin.com/in/plecrx/"}>
                            <FaLinkedin color={"white"} size={"2em"} />
                        </a>
                        <a href={"https://github.com/plecurie"}>
                            <FaGithubSquare color={"white"} size={"2em"} />
                        </a>
                        <a href={"mailto:prescilla@plecrx.io"}>
                            <FiMail color={"white"} size={"2em"} />
                        </a>
                    </div>

                    <div className="flex justify-center ml-4 mt-10">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                            Télécharger CV
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg xl:w-full w-1/4">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./bitmoji.png"
                    />
                </div>
            </div>
            <svg className="animate-bounce w-10 h-10 mx-auto absolute inset-x-0 bottom-5">
                <a href="#about">
                    <BsFileArrowDown color={"white"} size={"2em"} />
                </a>
            </svg>
        </section>
    );
}