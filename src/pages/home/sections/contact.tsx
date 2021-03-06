import React, {useRef} from "react";
import { sendForm } from '@emailjs/browser';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Contact = () => {
    const form = useRef<any>(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const sendEmail = (e: React.FormEvent<any>) => {
        e.preventDefault();

        sendForm('service_xyv618k', 'template_8su8b2h', form.current, 'dzD_0PnQ52xKP1fiF')
            .then((result) => {
                if (result.text === 'OK') setOpen(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact" className="relative h-full flex justify-center">
            <div className="container px-8 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end relative" style={{maxHeight: '500px'}}>
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
                                    Cr??teil, 94000
                                </p>
                            </div>
                            <div className="px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a href="mailto:prescilla@plecrx.io" className="text-yellow-700 leading-relaxed">
                                    prescilla@plecrx.io
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    name="contact"
                    onSubmit={sendEmail}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Me contacter
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="from_name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            className="w-full bg-gray-500 bg-opacity-20 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="from_email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            className="w-full bg-gray-500 bg-opacity-20 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {/* @ts-ignore */}
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="div">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Merci pour votre message ????
                        </Typography>
                        <Button onClick={handleClose}>Fermer</Button>
                    </Box>
                </Fade>
            </Modal>
        </section>
    );
}

export default Contact
