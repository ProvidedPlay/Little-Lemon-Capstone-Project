import Header from '../components/Header';
import Main from '../components/Main';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import NavExtended from '../components/NavExtended';

const Reservations = () => {
    return(
    <Main>
        <Header/>
        <NavExtended/>
        <HeroSection/>
        <BookingSection/>
        <Footer/>
    </Main>
    )
}

export default Reservations;