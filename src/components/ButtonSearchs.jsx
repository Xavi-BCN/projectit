// Deps
import { Link } from "react-router-dom";

const ButtonSearchs = () => {
 
  return (
    <>
      <Link to={"/Search"}  >
        <button
          className="btn btn-outline-warning me-2"
          type="button"
          >Buscar
        </button>
      </Link>
    </>
  )
}
export default ButtonSearchs