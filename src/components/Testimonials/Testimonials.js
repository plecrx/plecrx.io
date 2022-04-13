import React from "react";
import {UsersIcon} from "@heroicons/react/solid";
import { testimonials } from "../../utils/data";
import Testimonial from "./components/Testimonial";
import Stars from "../Stars/Stars";
import {Canvas} from "@react-three/fiber";

export default function Testimonials() {



    return (
        <section id="testimonials" className="h-screen flex justify-center">
            <Canvas style={{width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            <div className="container absolute px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Témoignages
                </h1>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={`testimonial-${index}`} testimonial={testimonial}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
