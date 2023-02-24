import { IoIosTime } from "react-icons/io"

const ButtonSchudule = ({title }) => {    
   return (
    <>
      <button
        onClick={()=>{window.open(`https://www.google.com/search?q=cartelera+${title}`)}}
        className="btn ms-1 w-25 border-0"
        type="button">
        <IoIosTime color='cyan' size={25}></IoIosTime>
      </button>
    </>
  )
}
export default ButtonSchudule
