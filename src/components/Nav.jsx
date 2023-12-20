import { FcHome } from "react-icons/fc";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiCakeSlice } from "react-icons/gi";

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
            <FcHome />
          </div>
          <div className="Contacto-nav">
            <Link
              to = "contacto"
              className="text-white text-decoration-none"
            >
              Contacto
            </Link>
            <FaBook />
          </div>

        </div>
        <div className="main-icon">
          <p className="text-white m-0">
            Happy Cake
          </p>
          <GiCakeSlice />
        </div>

      </nav>
    </>
  )
}

export default Nav;