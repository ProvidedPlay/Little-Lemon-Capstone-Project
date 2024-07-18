import { useState } from "react";
import useMenuToggler from "../hooks/useMenuToggler";
import useBookingFormManager from "../hooks/useBookingFormManager";
import { Link } from "react-router-dom";

const BookingForm = () => {
    const [contactMethodPlaceholderText, setContactMethodPlaceholderText] = useState("Enter email address here:");

    const {closeMenu} = useMenuToggler();
    const {
        produceAvailableTimesDropdownMenu,
        handleFormInputChange,
        getFutureDayMonth,
        handleSubmitForm,
    } = useBookingFormManager();

    const handleClickSubmit=() => {
        closeMenu();
        handleSubmitForm();
    }

    const handleContactMethodPlaceholderTextChange = (contactMethodPlaceholderText) => {
        setContactMethodPlaceholderText(contactMethodPlaceholderText);
    }



    return(
        <form id="bookingSectionDetails">
        <section id="bookingSectionTableDetails">
            <fieldset className="bookingDetailCard" id="numOfPeopleCard">
                <img className="bookingDetailCardIcon" id="peopleIcon" src="/People Icon.png" alt="Number of People Icon"/>
                <legend className="cardSubTitleText" for="numOfPeopleField">Number of People</legend>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="numOfPeopleList" onChange={handleFormInputChange}>
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
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationDateField" data-testid="reservationDateSelect" onChange={handleFormInputChange}>
                    <option className="bookingDetailOption cardSubTitleText" id="option 1" value="0">{getFutureDayMonth(0)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 2" value="1">{getFutureDayMonth(1)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 3" value="2">{getFutureDayMonth(2)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 4" value="3">{getFutureDayMonth(3)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 5" value="4">{getFutureDayMonth(4)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 6" value="5">{getFutureDayMonth(5)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 7" value="6">{getFutureDayMonth(6)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 8" value="7">{getFutureDayMonth(7)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 9" value="8">{getFutureDayMonth(8)[0].toString()}</option>
                </select>
            </fieldset>
            <fieldset className="bookingDetailCard" id="reservationTimeCard">
                <img className="bookingDetailCardIcon" id="calendarIcon" src="/Clock Icon.png" alt="Clock Icon"/>
                <legend className="cardSubTitleText" for="reservationTimeField">Reservation Time</legend>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationTimeField" data-testid="reservationTimeSelect" onChange={handleFormInputChange}>
                    {produceAvailableTimesDropdownMenu()}
                </select>
            </fieldset>
            <fieldset className="bookingDetailCard" id="specialOccasionCard">
                <img className="specialOccasionCardIcon" id="champagneGlassIcon" src="/Champagne Bottles.png" alt="Champagne Bottles Icon"/>
                <legend className="cardSubTitleText" for="specialOccasionField">Occasion</legend>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="specialOccasionField" onChange={handleFormInputChange}>
                    <option className="specialOccasionOption cardSubTitleText" value="none">None</option>
                    <option className="specialOccasionOption cardSubTitleText" value="Birthday">Birthday</option>
                    <option className="specialOccasionOption cardSubTitleText" value="Anniversary">Anniversary</option>
                </select>
            </fieldset>
        </section>
        <section id="bookingSectionSpecialRequests">
            <fieldset className="bookingInputSection">
                <legend className="cardSubTitleText" for="bookingSectionSpecialRequestsField">Special Requests</legend>
                <textarea className="thickGreyBorder cardSubTitleText" form="bookingSectionDetails" name="bookingSectionSpecialRequestsField" id="bookingSectionSpecialRequestsField" placeholder="Special Requests:" onChange={handleFormInputChange}/>
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
                <input className="contactInfoTextField thickGreyBorder cardSubTitleText" type="text" name="contactInfoTextField" id="contactInfoTextField" placeholder={contactMethodPlaceholderText} onChange={handleFormInputChange}/>
            </fieldset>
        </section>
        <section className="bookingSectionSubmitForm">
            <button className="buttonPrimary" type="submit" value="Submit" onClick={()=>handleClickSubmit()}>
                    <p className="itemText">Continue</p>
            </button>
        </section>
    </form>
    )
}

export default BookingForm;