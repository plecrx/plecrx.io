import React, {useEffect, useState} from "react";
import './Menu.css'
import Button from '@mui/material/Button';

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

    const menuItemClassName = (itemName) => (
        window.location.hash === itemName ? "nav__list-item active-nav" : "nav__list-item"
    )

    return (
        <div className="z-10">
            <div className="hamburger-wrapper p-0.5 lg:p-5 transform scale-50 xl:scale-75">
                <Button style={{backgroundColor: "rgb(0,0,0,0.5)", borderRadius: "3em", border: 'transparent'}} onClick={handleToggle}>
                    <div id="hamburger" className={isActive ? "open" : ""}>
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
                            <li className={menuItemClassName("#home")}><a href={"/#home"} className="hover-target" onClick={handleMenuItemClick}>Accueil</a></li>
                            <li className={menuItemClassName("#about")}><a href={"/#about"} className="hover-target" onClick={handleMenuItemClick}>À propos</a></li>
                            <li className={menuItemClassName("#projects")}><a href={"/#projects"} className="hover-target" onClick={handleMenuItemClick}>Projets</a></li>
                            <li className={menuItemClassName("#skills")}><a href={"/#skills"} className="hover-target" onClick={handleMenuItemClick}>Compétences</a></li>
                            <li className={menuItemClassName("#testimonials")}><a href={"/#testimonials"} className="hover-target" onClick={handleMenuItemClick}>Témoignages</a></li>
                            <li className={menuItemClassName("#contact")}><a href={"/#contact"} className="hover-target" onClick={handleMenuItemClick}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
