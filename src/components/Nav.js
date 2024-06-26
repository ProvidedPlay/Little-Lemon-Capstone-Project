import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const Nav = () => {

    const {
        menuIsOpen, setMenuIsOpen
    } = useAppContext()

    const handleToggleMenu=() => {
        setMenuIsOpen(!menuIsOpen)
    }
    return(
        <nav className="Nav">

            <section className={`navButton`} onClick={() => handleToggleMenu()}>
                <img className="navButtonIcon" src="/icon _hamburger menu_.png"/>
            </section>
            <ul className={`NavMenu`}>
                <li><Link to="/" className="itemText">Home</Link></li>
                <li><a className="itemText" href="url here">About</a></li>
                <li><a className="itemText" href="url here">Menu</a></li>
                <li><Link to="/reservations" className="itemText">Reservations</Link></li>
                <li><a className="itemText" href="url here">Order Online</a></li>
                <li><a className="itemText" href="url here">Login</a></li>
            </ul>
            {/* Mobile version*/}
        </nav>
    )
}

export default Nav;