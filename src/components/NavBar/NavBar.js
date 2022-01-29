import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header-titleContainer">
          <h2 className="header-name1">doble</h2><h1 className="header-name2">AMARILLA</h1>
        </div>
        <nav className="header-navBar">
          <div className="header-navBar-links">
            <a className="navBar-link" href="https://google.com">Botines</a>
            <a className="navBar-link" href="https://google.com">Indumentaria</a>
            <a className="navBar-link" href="https://google.com">Accesorios</a>
          </div>
          <div className="header-navBar-cart">
            <h2>Hola</h2>
          </div>
        </nav>
      </header>
    </>
  );
}