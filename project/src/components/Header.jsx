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
                    <img src="data:image/png;base64,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" />
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