import { useContext, useEffect } from "react"
import { DataUserContext } from "../aplication/DataUserContext"
import SelectedMovie from "./SelectedMovie";

export const DetailFav = ({idmovie, type}) => {

  const { userGlobal, movie, img_path, playing, setPlaying, trailer, getMovie,setValueMenu } = useContext(DataUserContext);

  useEffect(() => {
    
    getMovie(idmovie,type)
    //setValueMenu(5)
  }, [])


  return (
    <div className="container" >
      <SelectedMovie idmovie={movie.idpeli} type={movie.type} />
    </div>      
  )
    
}