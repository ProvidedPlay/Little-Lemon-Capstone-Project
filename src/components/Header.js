import Nav from "./Nav";

const Header = () => {

    return(
        <div className="header">
            <header className="headerPanel">
                <img className="Logo" src="/LittleLemonLogo.png" alt="Logo" id="headerLogo"/>
                <Nav/>
            </header>
        </div>

    )
}

export default Header;