import React, {Suspense} from "react";
import Typewriter from "typewriter-effect";
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {BsFileArrowDown, FiMail} from "react-icons/all";
import Stars from "../Stars/Stars";
import {Canvas} from "@react-three/fiber";
import {a as web} from "@react-spring/web";
import {a as three} from "@react-spring/three";
import Model from "../Model/Model";
import {ContactShadows, Environment} from "@react-three/drei";

export default function Home() {
    return (
        <section id="home" className="h-screen flex justify-center">
            <Canvas style={{width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>

            <div className="container absolute top-40 xl:top-20 mb-20 flex lg:flex-row flex-col-reverse  lg:bottom-auto bottom-5 my:auto">
                <div className="flex flex-col lg:items-start items-center lg:m-20 xl:px-20 lg:mr-auto">
                    <h1 className="flex flex-col lg:items-start items-center title-font xl:text-4xl sm:text-2xl text-xl font-medium text-white m-3 mb-8" >
                        <div className="md:mr-3 mr-0">Bonjour, je suis</div>

                        <Typewriter onInit={(typewriter)=> {
                                typewriter
                                    .typeString("<strong><label class='text-yellow-700'>Prescilla</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-700'>Développeuse Frontend</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-700'>Développeuse Backend</label></strong>")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("<strong><label class='text-yellow-700'>Développeuse Mobile</label></strong>")
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
                            href="#contact"
                            className="inline-flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            Me contacter
                        </a>
                    </div>
                </div>
                <div className={"absolute right-0 flex flex-grow justify-end lg:mr-40"}>
                    <web.main style={{width: '100%'}}>
                        <Canvas dpr={[10, 2]} camera={{ position: [0, 0, 0], fov: 35 }}>
                            <three.pointLight position={[10, 10, 10]} intensity={1.5} />
                            <Suspense fallback={null}>
                                <group rotation={[0, Math.PI, 0]}>
                                    <Model open hinge={'-0.425'} />
                                </group>
                                <Environment preset="city" />
                            </Suspense>
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.4} width={20} height={20} blur={2} far={4.5} />
                        </Canvas>
                    </web.main>
                </div>
            </div>
            <svg className="animate-bounce w-12 h-12 mx-auto absolute bottom-5">
                <a href="#about">
                    <BsFileArrowDown color="white" size="3em" />
                </a>
            </svg>
        </section>
    );
}
