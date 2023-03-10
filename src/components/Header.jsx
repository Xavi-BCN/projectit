import { useContext, useEffect } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import ButtonLogout from "./ButtonLogout";
import ButtonSearchs from "./ButtonSearchs";
import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";
import Logo from "./Logo";
import "../styles/Header.css";
import ButtonFavs from "./ButtonFavs";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const { userGlobal, userMail } = useContext(DataUserContext);
  return (
    <div className="header fixed-top " onClick={() => window.scroll(0, 0)}>
      <div className="container d-flex justify-content-end">
        {userGlobal ? (
          <>
            <Logo />
            <button
              type="button"
              className="btn btn-outline-warning me-2"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={`Estas validado como: ${userMail}`}
            >
              <AiOutlineUser />
            </button>
            <ButtonFavs />
            <ButtonSearchs />
            <ButtonLogout />
          </>
        ) : (
          <>
            <Logo />
            <ButtonLogin />
            <ButtonRegister />
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
