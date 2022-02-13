import './styles/styles.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/indumentaria" element={ <ItemListContainer/> }/>
          <Route path="/accesorios" element={ <ItemListContainer/> }/>
          <Route path="*" element={ <Navigate to='/'/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
