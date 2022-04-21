import React from "react";
import {UsersIcon} from "@heroicons/react/solid";
import { testimonials } from "../../../utils/data";
import Testimonial from "../../../components/testimonial";

const Testimonials = () => (
    <section id="testimonials" className="h-full flex justify-center">
        <div className="container px-5 py-10 mx-auto text-center">
            <UsersIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Témoignages
            </h1>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {testimonials.map((testimonial, id) => (
                    <Testimonial key={`testimonial-${id}`} testimonial={testimonial}/>
                ))}
            </div>
        </div>
    </section>
)

export default Testimonials
