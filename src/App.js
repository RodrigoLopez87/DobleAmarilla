import './styles/styles.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';

function App() {
 
  return (
    <>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
              <Route path="/producto/:productId" element={ <ItemDetailContainer/> }/>
              <Route path="*" element={ <Navigate to='/'/> }/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </>
  );
}

export default App;
