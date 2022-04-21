import React from "react";
import Typewriter from "typewriter-effect";
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {FaAngleDoubleDown, FiMail} from "react-icons/all";
import styled from "@emotion/styled";

const Avatar = styled.div`
  height: fit-content;
  border-radius: 50%;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.6);
  transform: translatey(50px);
  animation: float 6s ease-in-out infinite;
`

const Heroheader = () => (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
        <div className="container mb-20 flex lg:flex-row flex-col-reverse lg:bottom-auto bottom-5 my:auto">
            <div className="flex flex-col flex-grow lg:items-start items-center lg:m-20 xl:px-20 lg:mr-auto">
                <h1 className="flex flex-col lg:items-start items-center title-font xl:text-4xl sm:text-2xl text-xl font-medium text-white m-3 mb-8" >
                    <div className="md:mr-3 mr-0">Bonjour, je suis</div>

                    <Typewriter onInit={(typewriter)=> {
                        typewriter
                            .typeString("<strong><label class='text-yellow-800'>Prescilla</label></strong>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<strong><label class='text-yellow-800'>Développeuse Frontend</label></strong>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<strong><label class='text-yellow-800'>Développeuse Backend</label></strong>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<strong><label class='text-yellow-800'>Développeuse Mobile</label></strong>")
                            .pauseFor(1000)
                            .start();
                    }} options={{loop: true, autoStart: true}}
                    />
                </h1>
                <div className="flex items-stretch gap-3 ml-0 lg:ml-3">
                    <a href="https://www.linkedin.com/in/plecrx/">
                        <FaLinkedin color="white" size="2em" />
                    </a>
                    <a href="https://www.malt.fr/profile/plecrx" style={{width: '2em'}}>
                        <img src={'malt-logo-white.png'} alt={'malt.fr'}/>
                    </a>
                    <a href="https://github.com/plecurie">
                        <FaGithubSquare color="white" size="2em" />
                    </a>
                    <a href="mailto:prescilla@plecrx.io">
                        <FiMail color="white" size="2em" />
                    </a>
                </div>

                <div className="flex justify-center mt-10 ml-0 lg:ml-3">
                    <a
                        href={"#contact"}
                        className="inline-flex text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                        Me contacter
                    </a>
                </div>
            </div>
            <Avatar className="mx-auto lg:ml-20 lg:mr-40 w-1/4 md:1/3 lg:1/2 m-20 lg:m-0 ">
                <img
                    alt="hero"
                    src="./bitmoji.png"
                />
            </Avatar>
        </div>
        <svg className="animate-bounce w-12 h-12 relative w-100 mb-5 mx-auto clear-both">
            <a href="#about">
                <FaAngleDoubleDown color="#d3531a" size="3em" />
            </a>
        </svg>
    </section>
)

export default Heroheader
