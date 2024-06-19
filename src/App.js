import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main>
        <HeroSection/>
        <HighlightsSection/>
        <TestimonialsSection/>
        <AboutSection/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
