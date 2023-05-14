import './App.css';
import Section from './components/Section/Section';
import CarouselTxt from './components/TxtCarousel/CarouselTxt';
import Card from './components/VitrineCard/Card';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Mission from './components/mission/Mission';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
      </div>
      <div className='container carousel'>
        <Carousel />
      </div>
      <div className='container'>
        <span id={'teste1'}></span>
        <Section color={'red'} />
        <span id={'teste2'}></span>
        <Mission />
        <CarouselTxt />
        <span id={'teste3'}></span>
        <Card />
        <Formulario />
      </div>
      <div className='container'>
        <Footer />
      </div>
    </>
  );
}

export default App;
