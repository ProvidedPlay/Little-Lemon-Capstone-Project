import Nav from "./Nav";

const Header = () => {

    return(
        <div className="header">
            <header className="headerPanel">
                <img className="Logo" src="/LittleLemonLogo.png" alt="Logo"/>
                <Nav/>
            </header>
        </div>

    )
}

export default Header;