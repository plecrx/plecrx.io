
import React from "react";
import Typewriter from "typewriter-effect";
import {FaLinkedin, FaGithubSquare, FaFacebookSquare, FaQuora, FaStackOverflow, FaArrowDown} from 'react-icons/fa';

export default function Home() {
    return (
        <section id="home" className="lg:h-screen">
            <div className="container mx-auto my-auto px-10 py-20 flex md:flex-row flex-col flex-col-reverse items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font lg:text-3xl text-base font-medium text-white flex flex-col md:flex-row m-4" >
                        <div className="lg:mr-4 mr-0 lg:text-3xl text-base">Bonjour, je suis</div>

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
                        <a href={"https://github.com/plecurie"}>
                            <FaFacebookSquare color={"white"} size={"2em"} />
                        </a>
                        <a href={"https://github.com/plecurie"}>
                            <FaQuora color={"white"} size={"2em"} />
                        </a>
                        <a href={"https://github.com/plecurie"}>
                            <FaStackOverflow color={"white"} size={"2em"} />
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
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/3">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./bitmoji.png"
                    />
                </div>
            </div>
            <svg className="animate-bounce w-10 h-20 mx-auto absolute inset-x-0 bottom-0">
                <a href="#about">
                    <FaArrowDown color={"white"} size={"2em"} />
                </a>
            </svg>
        </section>
    );
}