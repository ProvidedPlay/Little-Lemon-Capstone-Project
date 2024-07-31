import { createContext, useContext, useState, useMemo, React } from "react";
import { fetchAPI } from "../utilities/API";
import getFutureDayMonth from "../utilities/getFutureDayMonth";
const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const[menuIsOpen, setMenuIsOpen] = useState(false);
    const[numberOfPeople, setNumberOfPeople] = useState("1 Person");
    const[reservationDate, setReservationDate] = useState(getFutureDayMonth(0)[0]);
    const[reservationTime, setReservationTime] = useState("17:00");
    const[specialOccasion, setSpecialOccasion] = useState("none")
    const[specialRequests, setSpecialRequests] = useState("none");
    const[contactDetails, setContactDetails] = useState("");
    const[availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

    const context = useMemo(() => ({
        menuIsOpen, setMenuIsOpen,
        numberOfPeople, setNumberOfPeople,
        reservationDate, setReservationDate,
        reservationTime, setReservationTime,
        specialOccasion, setSpecialOccasion,
        specialRequests, setSpecialRequests,
        contactDetails, setContactDetails,
        availableTimes, setAvailableTimes,
    }), [menuIsOpen, numberOfPeople, reservationDate, reservationTime, specialOccasion, availableTimes, contactDetails, specialRequests])

    return(
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider;