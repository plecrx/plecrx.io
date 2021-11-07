import React, {useEffect, useState} from "react";
import './Menu.css'

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

    const hamburgerClassName = isActive ? "open" : ""
    const menuClassName = showMenu ? "nav-active" : "nav"

    return (
        <div className="z-10">
            <div className="hamburger-wrapper p-0.5 lg:p-5">
                <div id="hamburger" className={hamburgerClassName} onClick={handleToggle}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>

            <div id="menu" className={menuClassName}>
                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item active-nav"><a href="#home" className="hover-target" onClick={handleMenuItemClick}>Home</a></li>
                            <li className="nav__list-item"><a href="#about" className="hover-target" onClick={handleMenuItemClick}>About</a></li>
                            <li className="nav__list-item"><a href="#projects" className="hover-target" onClick={handleMenuItemClick}>Projects</a></li>
                            <li className="nav__list-item"><a href="#skills" className="hover-target" onClick={handleMenuItemClick}>Skills</a></li>
                            <li className="nav__list-item"><a href="#contact" className="hover-target" onClick={handleMenuItemClick}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu