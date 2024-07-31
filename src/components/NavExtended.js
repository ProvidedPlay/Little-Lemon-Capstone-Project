import { Link } from "react-router-dom";
import useMenuToggler from "../hooks/useMenuToggler";
import { useAppContext } from "../context/AppContextProvider";

const NavExtended = () => {

    const {
        menuIsOpen,
    } = useAppContext()

    const {toggleMenu} = useMenuToggler();

    const handleToggleMenu=() => {
        toggleMenu();
    }

    return(
        <nav className={`navExtendedMenu ${menuIsOpen ? 'extended' : 'retracted'}`}>
            <ul className='NavMenu'>
                <li><Link to="/" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Home</Link></li>
                <li><a className="navLink itemText" href="url here" onClick={() => {handleToggleMenu()}}>About</a></li>
                <li><a className="navLink itemText" href="url here" onClick={() => {handleToggleMenu()}}>Menu</a></li>
                <li><Link to="/reservations" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Reservations</Link></li>
                <li><a className="navLink itemText" href="url here" onClick={() => {handleToggleMenu()}}>Order Online</a></li>
                <li><a className="navLink itemText" href="url here" onClick={() => {handleToggleMenu()}}>Login</a></li>
            </ul>
        </nav>
    )
}

export default NavExtended;