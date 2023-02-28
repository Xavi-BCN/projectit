import { useContext } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import { AiFillHeart } from "react-icons/ai";

const ButtonAddFav = ({
  MovieId,
  MovieType,
  MovieTitle,
  MovieName,
  Poster,
  Date,
}) => {
  const { saveFav, userMail } = useContext(DataUserContext);

  if (!MovieTitle) {
    MovieTitle = MovieName;
  } else if (!MovieName) {
    MovieTitle = MovieTitle;
  }

  let fav = {
    mail: userMail,
    title: MovieTitle,
    idpeli: MovieId,
    type: MovieType,
    poster: Poster,
    estreno: Date,
  };

  return (
    <>
      <button
        onClick={() => saveFav(fav)}
        className="btn bg-white ms-2 "
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Añadir a favoritas"
      >
        <AiFillHeart color="red" size={25}></AiFillHeart>
      </button>
    </>
  );
};
export default ButtonAddFav;
