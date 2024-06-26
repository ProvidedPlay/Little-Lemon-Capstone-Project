import Header from '../components/Header';
import Main from '../components/Main';
import HeroSection from '../components/HeroSection';
import BookingConfirmedSection from '../components/BookingConfirmedSection';
import Footer from '../components/Footer';
import NavExtended from '../components/NavExtended';
import BookingSection from '../components/BookingSection';

const ReservationsConfirmed = () => {
    return(
    <Main>
        <Header/>
        <NavExtended/>
        <HeroSection/>
        <BookingConfirmedSection/>
        <Footer/>
    </Main>
    )
}

export default ReservationsConfirmed;