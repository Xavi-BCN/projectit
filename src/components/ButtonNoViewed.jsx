import { useContext } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import { ImEyeBlocked } from "react-icons/im"



const ButtonNoViewed = ({idMovie }) => {
  const { deleteFavUser, userMail } = useContext(DataUserContext)
    
  


   return (
    <>
      
      <button
        // onClick={()=> deleteFavUser(idMovie,userMail)}
        className="btn ms-1 w-25"
        type="button"
        ><ImEyeBlocked color='gray' size={25}></ImEyeBlocked>
        </button>
        
    </>
  )
}
export default ButtonNoViewed
