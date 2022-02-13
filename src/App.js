import './styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/Segments/NavBar/NavBar";
import { Shoes } from './components/Pages/Shoes/Shoes';
import { Accesories } from './components/Pages/Accesories/Accesories';
import { Clothes } from './components/Pages/Clothes/Clothes';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Shoes/> }/>
          <Route path="/indumentaria" element={ <Clothes/> }/>
          <Route path="/accesorios" element={ <Accesories/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
