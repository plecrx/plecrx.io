import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => (
    <div style={{backgroundColor: 'rgb(0, 0, 0, 0.2)'}} className='relative bottom-0 w-100 mt-1 flex flex-col text-center '>
        <nav className='my-5'>
            <Link to="/legal-notice">Mentions légales</Link>
        </nav>
        <div className='p-2'>
            &copy; Copyright 2021 | All rights reserved | by Prescilla Lecurieux
        </div>
    </div>
)

export default Footer