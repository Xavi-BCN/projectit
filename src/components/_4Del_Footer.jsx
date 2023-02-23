import { Link } from "react-router-dom";
import LogoTMDB from "../assets/img/tmdb-logo.svg";

const Footer = () => {
  return (
    <>
      <div className="container fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2023 Movies Comming Soon</p>
          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
            </svg>
          </a>
          <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
          <div className="container-fluid">
          <img
            src={LogoTMDB}
            alt=""
            width="200"
            height="30"
            className="d-inline-block align-text-top"
          />
        </div>
        </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Características
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Acerca
              </a>
            </li> */}
            <li className="nav-item">
              <Link to={"/About"} className="nav-link" >Acerca</Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
