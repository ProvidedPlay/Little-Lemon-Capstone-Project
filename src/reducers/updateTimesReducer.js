import { fetchAPI } from "../utilities/API"
import { useAppContext } from "../context/AppContextProvider"

const updateTimesReducer =  (bookingTimesState, action) => {

    console.log(action)
    if (action === "updateDates") return {availableTimes: fetchAPI(new Date())}
    return(
        bookingTimesState
    )

}

export default updateTimesReducer;