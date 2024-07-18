import { useAppContext } from "../context/AppContextProvider";
import { fetchAPI, submitAPI } from "../utilities/API";
import { useNavigate } from "react-router-dom";

const useBookingFormManager = () => {

    const {
        availableTimes, setAvailableTimes,
        numberOfPeople, setNumberOfPeople,
        reservationDate, setReservationDate,
        reservationTime, setReservationTime,
        specialOccasion, setSpecialOccasion,
        specialRequests, setSpecialRequests,
        contactDetails, setContactDetails
    } = useAppContext()

    const navigate = useNavigate();

    const produceAvailableTimesDropdownMenu = () => {
        return(
            availableTimes.map((availableTime) => <option className="bookingDetailOption cardSubTitleText" data-testid="reservationTimeSelectOption" value={availableTime} key={availableTime}>{availableTime}</option>)
        )
    }

    const getFutureDayMonth =  (daysAfterToday) => {
        const date = new Date()
        const targetDate = new Date(date)

        targetDate.setDate(targetDate.getDate() + daysAfterToday)
        return(
            [`${targetDate.toLocaleString('default', {month:'long'})} ${targetDate.getDate().toLocaleString()}`,targetDate]
        )
    }

    const handleFormInputChange = (event) => {
        const value = event.target.value;
        const formInputFieldID = event.target.id
        switch(formInputFieldID) {
            case "numOfPeopleList":
                setNumberOfPeople(value)
            case "reservationDateField":
                const newReservationDate = getFutureDayMonth(value)[1];
                setReservationDate(newReservationDate);
                setAvailableTimes(fetchAPI(newReservationDate))
            case "reservationTimeField":
                setReservationTime(value)
            case "specialOccasionField":
                setSpecialOccasion(value)
            case "bookingSectionSpecialRequestsField":
                setSpecialRequests(value)
            case "contactInfoTextField":
                setContactDetails(value)
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
            console.log("submitted!")
        }
    }

    return(
        {produceAvailableTimesDropdownMenu, handleFormInputChange, getFutureDayMonth, handleSubmitForm}
    )
}

export default useBookingFormManager;