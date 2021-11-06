import React, {useEffect, useState} from "react";
import './Navbar.css'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(isActive)
    }, [isActive])

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="bg-gray-1000 bg-opacity-10 sticky top-0 z-10">
            <div className="p-5 absolute top-0 right-0">
                <div id="nav-icon1" className={isActive ? "open" : ""} onClick={handleToggle}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <body className={showMenu ? "nav-active" : "nav"}>
                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item active-nav"><a href="#" className="hover-target">home</a></li>
                            <li className="nav__list-item"><a href="#" className="hover-target">studio</a></li>
                            <li className="nav__list-item"><a href="#" className="hover-target">news</a></li>
                            <li className="nav__list-item"><a href="#" className="hover-target">contact</a></li>
                        </ul>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Navbar