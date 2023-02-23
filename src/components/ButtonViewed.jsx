import { useContext } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import { ImEye } from "react-icons/im"
import { MdNotListedLocation } from "react-icons/md"




const ButtonViewed = ({idMovie }) => {
  const { deleteFavUser, userMail } = useContext(DataUserContext)
    
  


   return (
    <>
      
      <button
        // onClick={()=> deleteFavUser(idMovie,userMail)}
        className="btn ms-1 w-25"
        type="button"
        ><ImEye color='orange' size={25}></ImEye>
        </button>
        
    </>
  )
}
export default ButtonViewed
