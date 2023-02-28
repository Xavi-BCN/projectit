import { useContext } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../aplication/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

const ButtonLogout = () => {
  const navigate = useNavigate();
  const { setFavMoviesUser, setValueMenu } = useContext(DataUserContext);

  return (
    <>
      <button
        onClick={() => {
          setFavMoviesUser([]);
          signOut(auth);
          navigate("/wellcome");
          setValueMenu(5);
        }}
        className="btn btn-danger"
        type="button"
      >
        Logout
      </button>
    </>
  );
};
export default ButtonLogout;
