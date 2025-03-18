import Nav from "./Nav";

const Footer = () => {

    return(
    <div className="Footer">
        <footer className="footerPanel">
            <img className="Logo" src="LittleLemonLogo.png" alt="Logo"/>
            <section>
                <p className="sectionTitleText">Quick Links</p>
                <Nav/>
            </section>
            <section>
                <p className="sectionTitleText">Contact</p>
                <ul>
                    <li className="softHighlightText"><p>Address: </p></li>
                    <li className="softHighlightText"><p>Phone Number: </p></li>
                    <li className="softHighlightText"><p>Email: </p></li>
                </ul>
            </section>
            <section>
                <p className="sectionTitleText">Social Media Links</p>
                <ul>
                    <li className="softHighlightText"><p>Link 1 </p></li>
                    <li className="softHighlightText"><p>Link 2</p></li>
                    <li className="softHighlightText"><p>Link 3</p></li>
                </ul>
            </section>
        </footer>
    </div>
    )
}

export default Footer;