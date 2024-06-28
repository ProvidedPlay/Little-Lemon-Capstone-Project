import { useState } from "react";
import useMenuToggler from "../hooks/useMenuToggler";
import { Link } from "react-router-dom";

const BookingSection = () => {
    const [contactMethodPlaceholderText, setContactMethodPlaceholderText] = useState("Enter email address here:");

    const {closeMenu} = useMenuToggler();

    const handleToggleMenu=() => {
        closeMenu();
    }
    const handleContactMethodPlaceholderTextChange = (contactMethodPlaceholderText) => {
        setContactMethodPlaceholderText(contactMethodPlaceholderText);
    }

    const getFutureDayMonth =  (daysAfterToday) => {
        const date = new Date()
        const targetDate = new Date(date)

        targetDate.setDate(targetDate.getDate() + daysAfterToday)
        return(
            `${targetDate.toLocaleString('default', {month:'long'})} ${targetDate.getDate().toLocaleString()}`
        )
    }

    return(
        <div className="bookingSection">
            <section id="bookingSectionBanner">
                <h1 className="sectionTitle" id="bookingSectionBannerText">FIND A TABLE</h1>
            </section>
            <form id="bookingSectionDetails">
                <section id="bookingSectionTableDetails">
                    <fieldset className="bookingDetailCard" id="numOfPeopleCard">
                        <img className="bookingDetailCardIcon" id="peopleIcon" src="/People Icon.png" alt="Number of People Icon"/>
                        <legend className="cardSubTitleText" for="numOfPeopleField">Number of People</legend>
                        <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="numOfPeopleList">
                            <option className="bookingDetailOption cardSubTitleText" value="1 Person">1 Person</option>
                            <option className="bookingDetailOption cardSubTitleText" value="2 People">2 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="3 People">3 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="4 People">4 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="5 People">5 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="6 People">6 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="7 People">7 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="8 People">8 People</option>
                            <option className="bookingDetailOption cardSubTitleText" value="9 People">9 People</option>
                        </select>
                    </fieldset>
                    <fieldset className="bookingDetailCard" id="reservationDateCard">
                        <img className="bookingDetailCardIcon" id="peopleIcon" src="/Calendar Icon.png" alt="Calendar Icon"/>
                        <legend className="cardSubTitleText" for="reservationDateField">Reservation Date</legend>
                        <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationDateField">
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(0).toString()}}>{getFutureDayMonth(0)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(1).toString()}}>{getFutureDayMonth(1)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(2).toString()}}>{getFutureDayMonth(2)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(3).toString()}}>{getFutureDayMonth(3)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(4).toString()}}>{getFutureDayMonth(4)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(5).toString()}}>{getFutureDayMonth(5)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(6).toString()}}>{getFutureDayMonth(6)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(7).toString()}}>{getFutureDayMonth(7)}</option>
                            <option className="bookingDetailOption cardSubTitleText" value={()=> {getFutureDayMonth(8).toString()}}>{getFutureDayMonth(8)}</option>
                        </select>
                    </fieldset>
                    <fieldset className="bookingDetailCard" id="reservationTimeCard">
                        <img className="bookingDetailCardIcon" id="calendarIcon" src="/Clock Icon.png" alt="Clock Icon"/>
                        <legend className="cardSubTitleText" for="reservationTimeField">Reservation Time</legend>
                        <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationDateField">
                            <option className="bookingDetailOption cardSubTitleText" value="7:00">7:00 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="7:00">7:30 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="8:00">8:00 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="8:00">8:30 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="9:00">9:00 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="9:00">9:30 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="10:00">10:00 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="10:00">10:30 PM</option>
                            <option className="bookingDetailOption cardSubTitleText" value="11:00">11:00 PM</option>
                        </select>
                    </fieldset>
                </section>
                <section id="bookingSectionSpecialRequests">
                    <fieldset className="bookingInputSection">
                        <legend className="cardSubTitleText" for="bookingSectionSpecialRequestsField">Special Requests</legend>
                        <textarea className="thickGreyBorder cardSubTitleText" form="bookingSectionDetails" name="bookingSectionSpecialRequestsField" id="bookingSectionSpecialRequestsField" placeholder="Special Requests:"/>
                    </fieldset>
                </section>
                <section id="bookingSectionContactInfo">
                    <h1 className="bookingSectionConfirmationText softSectionTitleText">Confirmation Details</h1>
                    <fieldset className="bookingInputSection thickGreyBorder">
                        <legend className="cardSubTitleText" for="bookingSectionContactInfoField">Confirmation Details</legend>
                        <label className="contactInfoOptionField  thickGreyBorder" id="contactInfoEmailOptionField">
                            <input type="radio" name="bookingSectionContactInfoField" value="emailOption" onClick={() => handleContactMethodPlaceholderTextChange("Enter email address here:")}/>
                            <img src="/Email Icon.png" alt="Option 1"/>
                        </label>
                        <label className="contactInfoOptionField thickGreyBorder" id="contactInfoPhoneOptionField">
                            <input type="radio" name="bookingSectionContactInfoField" value="phoneOption" onClick={() => handleContactMethodPlaceholderTextChange("Enter phone number here:")}/>
                            <img src="/Phone Icon.png" alt="Option 2"/>
                        </label>
                        <input className="contactInfoTextField thickGreyBorder cardSubTitleText" type="text" name="contactInfoTextField" id="contactInfoTextField" placeholder={contactMethodPlaceholderText}/>
                    </fieldset>
                </section>
                <section className="bookingSectionSubmitForm">
                    <button className="buttonPrimary" type="submit" value="Submit">
                        <Link className="link" to="/reservationsConfirmed" onClick={()=>handleToggleMenu()}>
                            <p className="itemText">Continue</p>
                        </Link>
                    </button>
                </section>
            </form>
        </div>
    )
}

export default BookingSection;