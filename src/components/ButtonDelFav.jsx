import { useContext } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import { RiDeleteBin2Fill } from "react-icons/ri";

const ButtonDelFav = ({ idMovie }) => {
  const { deleteFavUser, userMail } = useContext(DataUserContext);

  return (
    <>
      <button
        onClick={() => deleteFavUser(idMovie, userMail)}
        className="btn ms-1 w-25 border-0"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Eliminar de favoritas"
      >
        <RiDeleteBin2Fill color="red" size={25}></RiDeleteBin2Fill>
      </button>
    </>
  );
};
export default ButtonDelFav;
