import { Link } from "react-router-dom";
import useMenuToggler from "../hooks/useMenuToggler";

const BookingConfirmedSection = () => {

    const {closeMenu} = useMenuToggler();

    const handleToggleMenu=() => {
        closeMenu();
    }

    return(
        <div className="bookingConfirmedSection">
            <section id="bookingConfirmedSectionBanner">
                <h1 className="sectionTitle sectionTitleText" id="bookingConfirmedSectionBannerText">TABLE RESERVED</h1>
            </section>
            <section id="bookingConfirmedSectionDetails">
                <h1 className="displayText" id="bookingConfirmedMessageText">The Table Has Been Successfully Reserved!</h1>
                <img src="Checkmark Icon.png" alt="Checkmark Icon"/>
            </section>
            <section id="bookingConfirmedSectionReturn">
                    <button className="buttonPrimary">
                        <Link className="link" to="/" aria-label="On Click" onClick={() => handleToggleMenu()}>
                            <p className="itemText">Back to Home</p>
                        </Link>
                    </button>
                </section>
        </div>
    )
}

export default BookingConfirmedSection;