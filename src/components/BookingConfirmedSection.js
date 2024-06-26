import { Link } from "react-router-dom";

const BookingConfirmedSection = () => {

    return(
        <div className="bookingConfirmedSection">
            <section id="bookingConfirmedSectionBanner">
                <h1 className="sectionTitle" id="bookingConfirnedSectionBannerText">TABLE RESERVED</h1>
            </section>
            <section id="bookingConfirmedSectionDetails">
                <h1 className="displayText" id="bookingConfirmedMessageText">The Table Has Been Successfully Reserved!</h1>
                <img src="/Checkmark Icon.png"/>
            </section>
            <section className="bookingConfirmedSectionReturn">
                    <button className="buttonPrimary">
                        <Link className="link" to="/">
                            <p className="itemText">Back to Home</p>
                        </Link>
                    </button>
                </section>
        </div>
    )
}

export default BookingConfirmedSection;