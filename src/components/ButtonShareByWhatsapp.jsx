import { useContext, useState } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";

const ButtonShareByWhatsapp = ({MovieId}) => {
  
  const { saveFavs } = useContext(DataUserContext)
  
  return (

    // <a href="https://web.whatsapp.com/send?phone=34695685920&text=hola,%20¿qué%20tal%20estás?">Mensaje</a>
  
  <button
    className="btn btn-info"
    // onClick={()=>{window.open("https://api.whatsapp.com/send?phone=34695685920&text=hola,%20¿qué%20tal%20estás?",_blank)}}
    type="button"
    >WHATSAPP
  </button>
  )
}
export default ButtonShareByWhatsapp