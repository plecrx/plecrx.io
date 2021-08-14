import React from 'react'
import {AnnotationIcon} from "@heroicons/react/solid";

const About = () => {
    return (
        <section id="about" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <AnnotationIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        A propos de moi
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default About