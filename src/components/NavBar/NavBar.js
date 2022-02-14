import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header-titleContainer">        
          <Link to="/" className="header-titleContainer-link">
            <h2 className="header-titleContainer-name1">doble</h2><h1 className="header-titleContainer-name2">AMARILLA</h1>
          </Link>
        </div>
        <nav className="header-navBar">
          <div className="header-navBar-links">
            <Link to="/productos/botines" className="header-navBar-links-link">Botines</Link>
            <Link to="/productos/indumentaria" className="header-navBar-links-link">Indumentaria</Link>
            <Link to="/productos/accesorios" className="header-navBar-links-link">Accesorios</Link>
          </div>
          <div className="header-navBar-cart">
              <CartWidget/>
          </div>
        </nav>
      </header>
    </>
  );
}