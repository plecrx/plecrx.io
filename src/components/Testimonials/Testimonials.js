import React from "react";
import {UsersIcon} from "@heroicons/react/solid";
import { testimonials } from "../../data";
import Testimonial from "./components/Testimonial";

export default function Testimonials() {



    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Témoignages
                </h1>
                <div className="flex flex-wrap m-15">
                    {testimonials.map((testimonial) => (
                        <Testimonial testimonial={testimonial}/>
                    ))}
                </div>
            </div>
        </section>
    );
}