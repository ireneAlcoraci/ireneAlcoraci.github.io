function Navbar(){
    return(    
        <nav className="navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Borse Market</a>
            <div className="navbar-nav">
              <a className="nav-link active">🛒 Carrello</a>
              <a className="nav-link active" href="https://github.com/ireneAlcoraci/ireneAlcoraci.github.io/tree/main/react-app">Vedi codice</a>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;