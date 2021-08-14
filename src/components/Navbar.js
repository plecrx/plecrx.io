import { ArrowRightIcon } from "@heroicons/react/solid";
import React, {useEffect, useCallback, useState} from "react";
import {HiMenu} from "react-icons/all";

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize  = useCallback(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize );
        return () => {
            window.removeEventListener('resize', handleResize );
        };
    }, [handleResize]);

    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex justify-between p-5 md:flex-row">
                <div className="flex lg:flex-row flex-col md:mt-0">
                    <a className="title-font font-medium text-white md:mb-0">
                        <a href="#home" className="ml-3 text-xl text-green-500 font-bold">
                            Prescilla Lecurieux
                        </a>
                    </a>
                    {windowWidth > 1024 ?
                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                            <a href="#about" className="mr-5 hover:text-white">
                                A propos
                            </a>
                            <a href="#projects" className="mr-5 hover:text-white">
                                Projets
                            </a>
                            <a href="#skills" className="mr-5 hover:text-white">
                                Compétences
                            </a>
                            <a href="#testimonials" className="mr-5 hover:text-white">
                                Témoignages
                            </a>
                        </nav>
                        : <div className="lg:text-center float:right m-3"><HiMenu size="2em"/></div>
                    }
                </div>


                <a
                    href="#contact"
                    className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-white mt-0">
                    Me contacter
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}