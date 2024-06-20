import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Main>
      <Header/>
      <HeroSection/>
      <HighlightsSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <Footer/>
    </Main>
    </>
  );
}

export default App;
