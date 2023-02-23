import { useContext, useEffect } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import ButtonLogout from "./ButtonLogout";
import ButtonSearchs from "./ButtonSearchs";
import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";
import ButtonTest from "./ButtonTest";
import Logo from './Logo'
import "../styles/Header.css";
import ButtonFavs from "./ButtonFavs"

const Header = () => {
  const { userGlobal, userMail, favMoviesUser } = useContext(DataUserContext);
  

  return (
      <div
        className="header fixed-top "
        onClick={() => window.scroll(0, 0)}
      >   
        <div className="container d-flex justify-content-end">
          {userGlobal ? (
            <>
              <p className="me-3">{userMail}</p>
              <Logo />
              <ButtonFavs />
              <ButtonSearchs />
              <ButtonLogout />    
            </>
          ) : (
            <>
              <Logo />
              <ButtonLogin/> 
              <ButtonRegister />
            </>
          )}
        </div>
      </div>
  );
};
export default Header;
