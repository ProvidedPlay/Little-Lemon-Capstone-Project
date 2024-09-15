import { useState } from "react";
import useMenuToggler from "../hooks/useMenuToggler";
import useBookingFormManager from "../hooks/useBookingFormManager";
import getFutureDayMonth from "../utilities/getFutureDayMonth";

const BookingForm = () => {

    const [contactMethodInputType, setContactMethodInputType] = useState("email");
    const [contactMethodPlaceholderText, setContactMethodPlaceholderText] = useState("Enter email address here:")


    const {closeMenu} = useMenuToggler();
    const {
        produceAvailableTimesDropdownMenu,
        handleFormInputChange,
        handleSubmitForm,
        getDefaultFormValue,
    } = useBookingFormManager();

    const handleSubmit=(event) => {
        event.preventDefault();
        closeMenu();
        handleSubmitForm();
    }

    const handleContactMethodPlaceholderTextChange = (contactMethodPlaceholderText, inputType) => {
        setContactMethodPlaceholderText(contactMethodPlaceholderText);
        switch(inputType){
            case "email":
                setContactMethodInputType("email")
                break
            case "tel":
                setContactMethodInputType("tel")
                break
        }
    }

    return(
        <form id="bookingSectionDetails" onSubmit={handleSubmit}>
        <section id="bookingSectionTableDetails">
            <fieldset className="bookingDetailCard" id="numOfPeopleCard">
                <img className="bookingDetailCardIcon" id="peopleIcon" src="People Icon.png" alt="Number of People Icon"/>
                <legend className="cardSubTitleText" htmlFor="numOfPeopleField">Number of People</legend>
                <label className="invisibleLabel" htmlFor="numOfPeopleField">Number of People</label>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="numOfPeopleField" defaultValue={getDefaultFormValue("numberOfPeople")} onChange={handleFormInputChange} required>
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
                <img className="bookingDetailCardIcon" id="peopleIcon" src="Calendar Icon.png" alt="Calendar Icon"/>
                <legend className="cardSubTitleText" htmlFor="reservationDateField">Reservation Date</legend>
                <label className="invisibleLabel" htmlFor="reservationDateField">Reservation Date</label>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationDateField" defaultValue={getDefaultFormValue("reservationDate")} data-testid="reservationDateSelect" onChange={handleFormInputChange} required>
                    <option className="bookingDetailOption cardSubTitleText" id="option 1" value={0}>{getFutureDayMonth(0)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 2" value={1}>{getFutureDayMonth(1)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 3" value={2}>{getFutureDayMonth(2)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 4" value={3}>{getFutureDayMonth(3)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 5" value={4}>{getFutureDayMonth(4)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 6" value={5}>{getFutureDayMonth(5)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 7" value={6}>{getFutureDayMonth(6)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 8" value={7}>{getFutureDayMonth(7)[0].toString()}</option>
                    <option className="bookingDetailOption cardSubTitleText" id="option 9" value={8}>{getFutureDayMonth(8)[0].toString()}</option>
                </select>
            </fieldset>
            <fieldset className="bookingDetailCard" id="reservationTimeCard">
                <img className="bookingDetailCardIcon" id="calendarIcon" src="Clock Icon.png" alt="Clock Icon"/>
                <legend className="cardSubTitleText" htmlFor="reservationTimeField">Reservation Time</legend>
                <label className="invisibleLabel" htmlFor="reservationTimeField">Reservation Time</label>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="reservationTimeField" data-testid="reservationTimeSelect" defaultValue={getDefaultFormValue("reservationTime")} onChange={handleFormInputChange} required>
                    {produceAvailableTimesDropdownMenu()}
                </select>
            </fieldset>
            <fieldset className="bookingDetailCard" id="specialOccasionCard">
                <img className="bookingDetailCardIcon" id="champagneGlassIcon" src="Champagne Bottles.png" alt="Champagne Bottles Icon"/>
                <legend className="cardSubTitleText" htmlFor="specialOccasionField">Occasion</legend>
                <label className="invisibleLabel" htmlFor="specialOccasionField">Occasion</label>
                <select className="bookingDetailInputField cardSubTitleText thickGreyBorder" id="specialOccasionField" defaultValue={getDefaultFormValue("specialOccasion")} onChange={handleFormInputChange}>
                    <option className="specialOccasionOption cardSubTitleText" value="none">None</option>
                    <option className="specialOccasionOption cardSubTitleText" value="Birthday">Birthday</option>
                    <option className="specialOccasionOption cardSubTitleText" value="Anniversary">Anniversary</option>
                </select>
            </fieldset>
        </section>
        <section id="bookingSectionSpecialRequests">
            <fieldset className="bookingInputSection">
                <legend className="cardSubTitleText" htmlFor="bookingSectionSpecialRequestsField">Special Requests</legend>
                <label className="invisibleLabel" htmlFor="bookingSectionSpecialRequestsField">Special Requests</label>
                <textarea className="thickGreyBorder cardSubTitleText" form="bookingSectionDetails" name="bookingSectionSpecialRequestsField" id="bookingSectionSpecialRequestsField" placeholder="Special Requests:" defaultValue={getDefaultFormValue("specialRequests")} onChange={handleFormInputChange}/>
            </fieldset>
        </section>
        <section id="bookingSectionContactInfo">
            <h1 className="bookingSectionConfirmationText softSectionTitleText">Confirmation Details</h1>
            <fieldset className="bookingInputSection thickGreyBorder">
                <legend className="cardSubTitleText" htmlFor="bookingSectionContactInfoField">Confirmation Details</legend>
                <label className="contactInfoOptionField  thickGreyBorder" id="contactInfoEmailOptionField">
                    <input type="radio" name="bookingSectionContactInfoField" value="emailOption" defaultChecked={contactMethodInputType === "email" ? true : false} aria-label="On Click" onClick={() => handleContactMethodPlaceholderTextChange("Enter email address here:", "email")} required/>
                    <img src="Email Icon.png" alt="Email Icon"/>
                </label>
                <label className="contactInfoOptionField thickGreyBorder" id="contactInfoPhoneOptionField">
                    <input type="radio" name="bookingSectionContactInfoField" value="phoneOption" defaultChecked={contactMethodInputType === "tel" ? true : false} aria-label="On Click" onClick={() => handleContactMethodPlaceholderTextChange("Enter phone number here:", "tel")}/>
                    <img src="Phone Icon.png" alt="Phone Icon"/>
                </label>
                <input className="contactInfoTextField thickGreyBorder cardSubTitleText" type={contactMethodInputType} name="contactInfoTextField" id="contactInfoTextField" data-testid="contactInfoTextField" placeholder={contactMethodPlaceholderText} defaultValue={getDefaultFormValue("contactDetails")} onChange={handleFormInputChange} minLength="8" required/>
            </fieldset>
        </section>
        <section className="bookingSectionSubmitForm">
            <button className="buttonPrimary" data-testid="submitButton" aria-label="On Click" type="submit" value="Submit">
                    <p className="itemText">Continue</p>
            </button>
        </section>
    </form>
    )
}

export default BookingForm;