import Nav from "./Nav";

const Footer = () => {

    return(
    <div className="Footer">
        <img className="Logo" src="/LittleLemonLogo.png" alt="Logo"/>
        <section>
            <p>Doormat Navigation</p>
            <Nav/>
        </section>
        <section>
            <p>Contact</p>
            <ul>
                <li><p>Address: </p></li>
                <li><p>Phone Number: </p></li>
                <li><p>Email: </p></li>
            </ul>
        </section>
        <section>
            <p>Social Media Links</p>
            <ul>
                <li><p>Address: </p></li>
                <li><p>Phone Number: </p></li>
                <li><p>Email: </p></li>
            </ul>
        </section>
    </div>
    )
}

export default Footer;