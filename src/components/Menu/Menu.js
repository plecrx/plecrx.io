import React, {useEffect, useState} from "react";
import './Menu.css'
import {Button} from "@material-ui/core";

const Menu = () => {

    const [isActive, setIsActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(isActive)
    }, [isActive])

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    const handleMenuItemClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="z-10">
            <div className="hamburger-wrapper p-0.5 lg:p-5 transform scale-50 xl:scale-75">
                <Button style={{backgroundColor: "black", borderRadius: "3em", opacity: "0.5", borderColor: 'transparent'}}>
                    <div id="hamburger" className={isActive ? "open" : ""} onClick={handleToggle}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </Button>
            </div>

            <div id="menu" className={showMenu ? "nav-active" : "nav"}>
                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item active-nav"><a href="#home" className="hover-target" onClick={handleMenuItemClick}>Home</a></li>
                            <li className="nav__list-item"><a href="#about" className="hover-target" onClick={handleMenuItemClick}>About</a></li>
                            <li className="nav__list-item"><a href="#projects" className="hover-target" onClick={handleMenuItemClick}>Projects</a></li>
                            <li className="nav__list-item"><a href="#skills" className="hover-target" onClick={handleMenuItemClick}>Skills</a></li>
                            <li className="nav__list-item"><a href="#testimonials" className="hover-target" onClick={handleMenuItemClick}>Testimonials</a></li>
                            <li className="nav__list-item"><a href="#contact" className="hover-target" onClick={handleMenuItemClick}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu