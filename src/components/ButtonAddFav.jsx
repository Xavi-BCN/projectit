import { useContext } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import {AiFillHeart} from 'react-icons/ai'
import { convertLength } from '@mui/material/styles/cssUtils';

const ButtonAddFav = ({MovieId, MovieType, MovieTitle, MovieName, Poster}) => {
  const { saveFav, userMail, favMoviesUser } = useContext(DataUserContext)
  
  if(!MovieTitle){
    MovieTitle = MovieName
  }else if(!MovieName){
    MovieTitle = MovieTitle
  }

  let fav = { mail: userMail, title: MovieTitle, idpeli: MovieId, type: MovieType, poster: Poster }
  
 

   return (
    <>
     
      <button
        onClick={()=> saveFav(fav)}
        className="btn bg-black ms-2 "
        type="button"
        ><AiFillHeart color='red' size={25}></AiFillHeart>
      </button>
    </>
  )
}
export default ButtonAddFav