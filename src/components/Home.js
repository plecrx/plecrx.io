
import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaQuora, FaStackOverflow } from 'react-icons/fa';

export default function Home() {
    return (
        <section id="home">
            <div className="container mx-auto my-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white flex flex-wrap m-4" >
                        <div className="mr-4">Bonjour, je suis</div>

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
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./bitmoji.png"
                    />
                </div>
            </div>
        </section>
    );
}