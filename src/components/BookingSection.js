import { useState } from "react";
import { Link } from "react-router-dom";

const BookingSection = () => {
    const [contactMethodPlaceholderText, setContactMethodPlaceholderText] = useState("Enter email address here:");

    const handleContactMethodPlaceholderTextChange = (contactMethodPlaceholderText) => {
        setContactMethodPlaceholderText(contactMethodPlaceholderText);
    }

    return(
        <div className="bookingSection">
            <section id="bookingSectionBanner">
                <h1 className="sectionTitle" id="bookingSectionBannerText">FIND A TABLE</h1>
            </section>
            <form id="bookingSectionDetails">
                <section id="bookingSectionTableDetails">
                    <fieldset className="bookingDetailCard" id="numOfPeopleCard">
                        <img className="bookingDetailCardIcon" id="peopleIcon" src="/People Icon.png"/>
                        <legend for="numOfPeopleField">Number of People</legend>
                        <select id="numOfPeopleList">
                            <option value="1 Person">1 Person</option>
                            <option value="2 People">2 People</option>
                            <option value="3 People">3 People</option>
                            <option value="4 People">4 People</option>
                            <option value="5 People">5 People</option>
                            <option value="6 People">6 People</option>
                            <option value="7 People">7 People</option>
                            <option value="8 People">8 People</option>
                            <option value="9 People">9 People</option>
                        </select>
                    </fieldset>
                    <fieldset className="bookingDetailCard" id="reservationDateCard">
                        <img className="bookingDetailCardIcon" id="peopleIcon" src="/Calendar Icon.png"/>
                        <legend for="reservationDateField">Reservation Date</legend>
                        <input type="date" id="reservationDateField" name="reservationDateField"/>
                    </fieldset>
                    <fieldset className="bookingDetailCard" id="reservationTimeCard">
                        <img className="bookingDetailCardIcon" id="calendarIcon" src="/Clock Icon.png"/>
                        <legend for="reservationTimeField">Reservation Time</legend>
                        <input type="time" id="reservationTimeField" name="reservationTimeField"/>
                    </fieldset>
                </section>
                <section id="bookingSectionSpecialRequests">
                    <fieldset className="BookingInputSection">
                        <legend for="bookingSectionSpecialRequestsField">Special Requests</legend>
                        <textarea form="bookingSectionDetails" name="bookingSectionSpecialRequestsField" id="bookingSectionSpecialRequestsField" placeholder="Special Requests:"/>
                    </fieldset>
                </section>
                <section id="bookingSectionContactInfo">
                    <fieldset className="BookingInputSection">
                        <legend for="bookingSectionContactInfoField">Confirmation Details</legend>
                        <label className="contactInfoOptionField" id="contactInfoEmailOptionField">
                            <input type="radio" name="bookingSectionContactInfoField" value="emailOption" onClick={() => handleContactMethodPlaceholderTextChange("Enter email address here:")}/>
                            <img src="/Email Icon.png" alt="Option 1"/>
                        </label>
                        <label className="contactInfoOptionField" id="contactInfoPhoneOptionField">
                            <input type="radio" name="bookingSectionContactInfoField" value="phoneOption" onClick={() => handleContactMethodPlaceholderTextChange("Enter phone number here:")}/>
                            <img src="/Phone Icon.png" alt="Option 1"/>
                        </label>
                        <input type="text" name="contactInfoTextField" id="contactInfoTextField" placeholder={contactMethodPlaceholderText}/>
                    </fieldset>
                </section>
                <section className="bookingSectionSubmitForm">
                    <button className="buttonPrimary" type="submit" value="Submit">
                        <Link className="link" to="/reservationsConfirmed">
                            <p className="itemText">Continue</p>
                        </Link>
                    </button>
                </section>
            </form>
        </div>
    )
}

export default BookingSection;