import { createContext, useContext, useState, useMemo, React } from "react";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const[menuIsOpen, setMenuIsOpen] = useState(false);

    const context = useMemo(() => ({
        menuIsOpen, setMenuIsOpen,
    }), [menuIsOpen])

    return(
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider;