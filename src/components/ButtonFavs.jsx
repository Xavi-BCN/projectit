import { useContext } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import { useNavigate } from "react-router-dom";

const ButtonFavs = () => {

  const navigate = useNavigate();
  const { setValueMenu, favMoviesUser } = useContext(DataUserContext)

  return (
    <>
      <button
        onClick={() => {
          navigate("/favorites")
          setValueMenu(5)
        }}
        className="btn btn-info me-2 primary position-relative"
        type="button"
      >Favoritas<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{favMoviesUser.length} <span className="visually-hidden">Favoritas</span></span>
      </button>
    </>
  )
}
export default ButtonFavs