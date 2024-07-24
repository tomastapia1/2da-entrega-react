import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Pages/Main/Main';
import Contacto from './components/Pages/Contacto/Contacto';
import Nosotros from './components/Pages/Nosotros/Nosotros';
import ItemDetailContainer from './components/Pages/Main/ItemDetailContainer';

/* Styles Sass */
import './sass/index.scss'

function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={ <Main /> }/>
        <Route path="/item/:id/:category/:name" element={ <ItemDetailContainer/> }/>
        <Route path="/nosotros" element={ <Nosotros/> }/>
        <Route path="/contacto" element={ <Contacto /> }/>
      </Routes>

    </BrowserRouter>
  )

}


export default App;