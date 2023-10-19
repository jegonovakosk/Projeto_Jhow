import './App.css';
import Section from './components/Section/Section';
import CarouselTxt from './components/TxtCarousel/CarouselTxt';
import Card from './components/VitrineCard/Card';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Mission from './components/mission/Mission';
import Botao from './components/botaoTopo/botaoTopo';
import Accordion from './components/accordion/accordion';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container-fluid'>
          <span id={'teste0'}></span>
          <Header />
        </div>
        <div className='container-fluid carousel'>
          <Carousel />
        </div>
        <div className='container-fluid'>
         
          <Accordion />
          <CarouselTxt />
          
        </div>
        <div className='container-fluid'>
          <Footer />
        </div>
      </div>
      <Botao />
    </>
  );
}

export default App;
