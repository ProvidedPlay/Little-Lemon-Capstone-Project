import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const NavExtended = () => {

    const {
        menuIsOpen, setMenuIsOpen,
    } = useAppContext()

    const handleToggleMenu=() => {
        setMenuIsOpen(!menuIsOpen)
    }

    return(
        <nav className={`navExtendedMenu ${menuIsOpen ? 'extended' : 'retracted'}`}>
            <ul className='NavMenu'>
                <li><Link to="/" className="itemText" onClick={() => {handleToggleMenu()}}>Home</Link></li>
                <li><a className="itemText" href="url here" onClick={() => {handleToggleMenu()}}>About</a></li>
                <li><a className="itemText" href="url here" onClick={() => {handleToggleMenu()}}>Menu</a></li>
                <li><Link to="/reservations" className="itemText" onClick={() => {handleToggleMenu()}}>Reservations</Link></li>
                <li><a className="itemText" href="url here" onClick={() => {handleToggleMenu()}}>Order Online</a></li>
                <li><a className="itemText" href="url here" onClick={() => {handleToggleMenu()}}>Login</a></li>
            </ul>
        </nav>
    )
}

export default NavExtended;