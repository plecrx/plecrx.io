import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

const Testimonial = ({testimonial}) => (
    <div className="p-4 md:w-1/2 w-full rounded-2xl ">
        <div className="h-full bg-gray-500 bg-opacity-20 p-8 rounded-xl">
            <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4 ">
                    <img
                        alt="testimonial"
                        src={testimonial.image}
                        className="w-20 rounded-full mx-auto flex-shrink-0 object-cover object-center mb-5"
                    />
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                   <span className="text-gray-400 text-sm">
                      {testimonial.role}
                    </span>
                    <span className="text-gray-400 text-sm mb-5">
                      {testimonial.company}
                    </span>
                </span>
            </div>

            <p className="leading-relaxed mb-6">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <Typography style={{fontFamily: "'Fira Mono', monospace"}}>{ ` ${testimonial.quote} ` }</Typography>
                <FontAwesomeIcon icon={faQuoteRight} />
            </p>
        </div>
    </div>
)

export default Testimonial
