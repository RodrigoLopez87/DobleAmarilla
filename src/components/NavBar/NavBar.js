import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header-titleContainer">
          <h2 className="header-titleContainer-name1">doble</h2><h1 className="header-titleContainer-name2">AMARILLA</h1>
        </div>
        <nav className="header-navBar">
          <div className="header-navBar-links">
            <a className="header-navBar-links-link" href="https://google.com">Botines</a>
            <a className="header-navBar-links-link" href="https://google.com">Indumentaria</a>
            <a className="header-navBar-links-link" href="https://google.com">Accesorios</a>
          </div>
          <div className="header-navBar-cart">
            <CartWidget/>
          </div>
        </nav>
      </header>
    </>
  );
}