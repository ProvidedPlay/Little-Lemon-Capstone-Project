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
                <li><Link to="/" className="navLink itemText" onClick={() => {handleToggleMenu()}}>About</Link></li>
                <li><Link to="/" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Menu</Link></li>
                <li><Link to="/reservations" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Reservations</Link></li>
                <li><Link to="/reservations" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Order Online</Link></li>
                <li><Link to="/" className="navLink itemText" onClick={() => {handleToggleMenu()}}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default NavExtended;