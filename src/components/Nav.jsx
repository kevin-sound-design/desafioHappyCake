import { Link } from "react-router-dom";

function Nav(){
  return (
    <>
      <nav className="mi-navbar">
        <div className="links">
          <div className="home-nav">
            <Link
              to = "/"
              className="text-white text-decoration-none"
            >
              Home
            </Link>
            <span>🏠​</span>
          </div>
          <div className="Contacto-nav">
            <Link
              to = "contacto"
              className="text-white text-decoration-none"
            >
              Contacto
            </Link>
            <span>📒​</span>
          </div>

        </div>
        <div className="main-icon">
          <p className="text-white m-0">
            Happy Cake
          </p>
          <span>🍰​</span>
        </div>

      </nav>
    </>
  )
}

export default Nav;