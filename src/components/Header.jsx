import { Link } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react"
import MenuItems from "./ui/MenuItems";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const mobileSize = window.innerWidth > 450

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     if(!mobileSize){}
    // }, [])

    return (
        <>
            <header className="burger-menu-wrapper">
                <Link to="/">
                    <img src="https://1000logos.net/wp-content/uploads/2016/11/google_logo.png" />
                </Link>
                {
                    mobileSize && <nav>
                        <MenuItems />
                    </nav>
                    
                }
                {!mobileSize && <button className={isOpen ? "burger-menu-button" : 'burger-cross-button'} onClick={handleMenuToggle}>
                    ☰ Menu
                </button>}

                <div className={`menu-sidebar ${(isOpen && !mobileSize) && 'shown'}`}>
                    <MenuItems />
                </div>
            </header>
        </>
    )
}