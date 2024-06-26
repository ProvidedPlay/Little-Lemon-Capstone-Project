import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <div className="Nav">
            <ul className="NavMenu">
                <li><Link to="/" className="itemText">Home</Link></li>
                <li><a className="itemText" href="url here">About</a></li>
                <li><a className="itemText" href="url here">Menu</a></li>
                <li><Link to="/reservations" className="itemText">Reservations</Link></li>
                <li><a className="itemText" href="url here">Order Online</a></li>
                <li><a className="itemText" href="url here">Login</a></li>
            </ul>
            <img className="navButton" src="/icon _hamburger menu_.png"/>
        </div>
    )
}

export default Nav;