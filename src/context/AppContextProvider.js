import { createContext, useContext, useState, useMemo, React } from "react";
import { fetchAPI } from "../utilities/API";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const[menuIsOpen, setMenuIsOpen] = useState(false);
    const[numberOfPeople, setNumberOfPeople] = useState("1 Person");
    const[reservationDate, setReservationDate] = useState();
    const[reservationTime, setReservationTime] = useState("");
    const[specialOccasion, setSpecialOccasion] = useState("")
    const[specialRequests, setSpecialRequests] = useState("");
    const[contactDetails, setContactDetails] = useState("")
    const[availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

    const context = useMemo(() => ({
        menuIsOpen, setMenuIsOpen,
        numberOfPeople, setNumberOfPeople,
        reservationDate, setReservationDate,
        reservationTime, setReservationTime,
        specialOccasion, setSpecialOccasion,
        specialRequests, setSpecialRequests,
        contactDetails, setContactDetails,
        availableTimes, setAvailableTimes
    }), [menuIsOpen, numberOfPeople, reservationDate, reservationTime, specialOccasion, specialRequests, contactDetails, availableTimes])

    return(
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider;