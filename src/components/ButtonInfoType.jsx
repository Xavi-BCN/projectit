import { IoIosEasel } from "react-icons/io"
import { BiCameraMovie } from "react-icons/bi"

const ButtonInfoType = ({ type }) => {
  return (
    <>
      {type === "tv" ?
        (<button className="btn ms-1 w-25 border-0" disabled><IoIosEasel color='yellow' size={25}></IoIosEasel></button>
        ) : (
          <button className="btn ms-1 w-25 border-0" disabled><BiCameraMovie color='white' size={25}></BiCameraMovie></button>
        )}
    </>
  )
}
export default ButtonInfoType
