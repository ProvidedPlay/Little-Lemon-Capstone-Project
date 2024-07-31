import { useAppContext } from "../context/AppContextProvider";
import { fetchAPI, submitAPI } from "../utilities/API";
import { useNavigate } from "react-router-dom";
import getFutureDayMonth from "../utilities/getFutureDayMonth";

const useBookingFormManager = () => {

    const {
        availableTimes, setAvailableTimes,
        numberOfPeople, setNumberOfPeople,
        reservationDate, setReservationDate,
        reservationTime, setReservationTime,
        specialOccasion, setSpecialOccasion,
        specialRequests, setSpecialRequests,
        contactDetails, setContactDetails,
    } = useAppContext()

    const navigate = useNavigate();

    const initialFormState = {
        numberOfPeople: "1 Person",
        reservationDate: getFutureDayMonth(0)[0],
        reservationTime: "17:00",
        specialOccasion: "none",
        specialRequests: "",
        contactDetails: "",
        availableTimes: fetchAPI(new Date()),
    }

    const produceAvailableTimesDropdownMenu = () => {
        return(
            availableTimes.map((availableTime) => <option className="bookingDetailOption cardSubTitleText" data-testid="reservationTimeSelectOption" value={availableTime} key={availableTime}>{availableTime}</option>)
        )
    }

    const handleFormInputChange = (event) => {
        const value = event.target.value;
        const formInputFieldID = event.target.id
        switch(formInputFieldID) {
            case "numOfPeopleField":
                setNumberOfPeople(value)
                break;
            case "reservationDateField":
                const newReservationDate = getFutureDayMonth(parseInt(value))[1];
                setReservationDate(newReservationDate);
                setAvailableTimes(fetchAPI(newReservationDate))
                break;
            case "reservationTimeField":
                setReservationTime(value)
                break;
            case "specialOccasionField":
                setSpecialOccasion(value)
                console.log("specialOccasion updated")
                break;
            case "bookingSectionSpecialRequestsField":
                setSpecialRequests(value)
                break;
            case "contactInfoTextField":
                setContactDetails(value)
                break;
            default:
                console.log("nothing submitted")
        }
    }

    const handleSubmitForm = () => {
        submitForm(numberOfPeople, reservationDate, reservationTime, specialOccasion, specialRequests, contactDetails)
    }
    const submitForm = ( numberOfPeople, reservationDate, reservationTime, specialOccasion, specialRequests, contactDetails ) => {

        const formData = [numberOfPeople, reservationDate, reservationTime, specialOccasion, specialRequests, contactDetails]
        console.log(formData)
        if (submitAPI(formData) === true){
            navigate("/reservationsConfirmed")
            resetForm();
        }
    }

    const resetForm = () => {
        setNumberOfPeople(initialFormState.numberOfPeople)
        setReservationDate(initialFormState.reservationDate)
        setReservationTime(initialFormState.reservationTime)
        setSpecialOccasion(initialFormState.specialOccasion)
        setSpecialRequests(initialFormState.specialRequests)
        setContactDetails(initialFormState.contactDetails)
        setAvailableTimes(initialFormState.availableTimes)
    }

    const getDefaultFormValue = (formElement) => {
        switch(formElement){
            case "numberOfPeople":
                return(numberOfPeople)
            case "reservationDate":
                return(reservationDate)
            case "reservationTime":
                return(reservationTime)
            case "specialOccasion":
                return(specialOccasion)
            case "specialRequests":
                return(specialRequests)
            case "contactDetails":
                return(contactDetails)
        }
    }


    return(
        {produceAvailableTimesDropdownMenu, handleFormInputChange, getFutureDayMonth, handleSubmitForm, getDefaultFormValue}
    )
}

export default useBookingFormManager;