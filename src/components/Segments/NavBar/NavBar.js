import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header-titleContainer">
          <h2 className="header-titleContainer-name1">doble</h2><h1 className="header-titleContainer-name2">AMARILLA</h1>
        </div>
        <nav className="header-navBar">
          <div className="header-navBar-links">
            <Link to="/" className="header-navBar-links-link">Botines</Link>
            <Link to="/indumentaria" className="header-navBar-links-link">Indumentaria</Link>
            <Link to="/accesorios" className="header-navBar-links-link">Accesorios</Link>
          </div>
          <div className="header-navBar-cart">
              <CartWidget/>
          </div>
        </nav>
      </header>
    </>
  );
}