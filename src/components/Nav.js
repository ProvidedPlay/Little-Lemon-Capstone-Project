import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import useMenuToggler from "../hooks/useMenuToggler";

const Nav = () => {

    const {
        menuIsOpen,
    } = useAppContext()

    const {toggleMenu} = useMenuToggler();

    const handleToggleMenu=() => {
        toggleMenu();
    }
    return(
        <nav className="Nav">

            <section className={`navButton ${menuIsOpen ? "open" : "closed"}`} aria-label="On Click" onClick={() => handleToggleMenu()}>
                <img className="navButtonIcon" src="/icon _hamburger menu_.png" alt="Nav Menu Button"/>
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