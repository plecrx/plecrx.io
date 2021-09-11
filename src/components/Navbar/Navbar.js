import React from "react";
import {GiHamburgerMenu} from "react-icons/all";

export default function Navbar() {
    /*    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

        const handleResize  = useCallback(() => {
            setWindowWidth(window.innerWidth)
        }, []);

        useEffect(() => {
            window.addEventListener('resize', handleResize );
            return () => {
                window.removeEventListener('resize', handleResize );
          };
        }, [handleResize]);

    /*    const items = [
            {title: "A propos", href: "#about"},
            {title: "Projets", href: "#projects"},
            {title: "Compétences", href: "#skills"},
            {title: "Témoignages", href: "#testimonials"}
        ]

        const menu = (
            <div className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-none flex flex-col lg:flex-row items-center text-lg space-y-4 lg:space-y-0 pb-3">
                {items.map((item, id) => (
                    <a key={id} href={item.href} className="mr-5 hover:text-white">
                        {item.title}
                    </a>
                ))}
            </div>
        )*/

    return (
        <header className="bg-gray-800 sticky top-0 z-10 mb-4">
            <div className="container mx-auto ">
                <div className="md:mt-0 flex flex justify-between p-5 md:flex-row">
                    <a href="#home" className="title-font font-medium text-white md:mb-0 ml-3 text-xl text-green-500 font-bold">
                        Prescilla Lecurieux
                    </a>
                    <GiHamburgerMenu className="w-6 h-6 green-600"/>
                </div>
            </div>
        </header>
    );
}