import Header from '../components/Header';
import Main from '../components/Main';
import HeroSection from '../components/HeroSection';
import HighlightsSection from '../components/HighlightsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Homepage = () => {
    return(
    <Main pageType="homepage">
        <Header/>
        <HeroSection/>
        <HighlightsSection/>
        <Footer/>
    </Main>
    )
}

export default Homepage;