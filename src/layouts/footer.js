import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => (
    <div style={{backgroundColor: 'rgb(0, 0, 0, 0.2)'}} className='relative w-100 mt-10 flex flex-col text-center clear-both '>
        <nav className='my-5'>
            <Link to="/legal-notice">Mentions légales</Link>
        </nav>
        <div className='p-2'>
            &copy; Copyright 2021 | All rights reserved | by Prescilla Lecurieux
        </div>
    </div>
)

export default Footer
