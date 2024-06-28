import { useAppContext } from "../context/AppContextProvider";

const useMenuToggler = () => {

    const {
        menuIsOpen, setMenuIsOpen
    } = useAppContext()

    const toggleMenu = () => {
        console.log(!menuIsOpen)
        setMenuIsOpen(!menuIsOpen);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    return(
        {toggleMenu, closeMenu}
    )
}

export default useMenuToggler;