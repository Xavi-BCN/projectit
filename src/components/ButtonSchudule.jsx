import { useContext } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import { BsCameraReelsFill } from "react-icons/bs"
import { MdNotListedLocation } from "react-icons/md"
import { IoIosTime } from "react-icons/io"

const ButtonSchudule = ({title }) => {
  const { deleteFavUser, userMail } = useContext(DataUserContext)
    
  


   return (
    <>
      
      <button
       onClick={()=>{window.open(`https://www.google.com/search?q=cartelera+${title}`)}}
        className="btn ms-1 w-25"
        type="button"
        ><IoIosTime color='cyan' size={25}></IoIosTime>
        </button>
        
    </>
  )
}
export default ButtonSchudule
