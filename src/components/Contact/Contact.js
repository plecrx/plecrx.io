import React from "react";
import Stars from "../Stars/Stars";
import {Canvas} from "@react-three/fiber";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative flex justify-center">
            <Canvas style={{position: "absolute", width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            <div className="container px-8 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42061.783144975736!2d2.417308467967548!3d48.784535345631674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60caf330272df%3A0x4573b9315445d467!2zQ3LDqXRlaWw!5e0!3m2!1sfr!2sfr!4v1636374376272!5m2!1sfr!2sfr"
                    />

                    <div style={{background: '#212226'}} className="relative rounded">

                    <div className="bg-gray-500 bg-opacity-20 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Créteil, 94000
                            </p>
                        </div>
                        <div className="px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:prescilla@plecrx.io" className="text-yellow-700 leading-relaxed">
                                prescilla@plecrx.io
                            </a>
                            {/*<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">0612683574</p>*/}
                        </div>
                    </div>
                    </div>
                </div>


                <form
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Me contacter
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-500 bg-opacity-20 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-500 bg-opacity-20 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-500 bg-opacity-20 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
