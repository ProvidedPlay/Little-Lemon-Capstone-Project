import logo from "../LittleLemonLogo.png"

const Footer = () => {

    return(
        <>
        <img src={logo}/>

        <p>Doormat Navigation</p>
        <ul>
            <li><a href="url here">Home</a></li>
            <li><a href="url here">About</a></li>
            <li><a href="url here">Menu</a></li>
            <li><a href="url here">Reservations</a></li>
            <li><a href="url here">Order Online</a></li>
            <li><a href="url here">Login</a></li>
        </ul>

        <p>Contact</p>
        <ul>
            <li><p>Address: </p></li>
            <li><p>Phone Number: </p></li>
            <li><p>Email: </p></li>
        </ul>

        <p>Social Media Links</p>
        <ul>
            <li><p>Address: </p></li>
            <li><p>Phone Number: </p></li>
            <li><p>Email: </p></li>
        </ul>
        </>
    )
}

export default Footer;