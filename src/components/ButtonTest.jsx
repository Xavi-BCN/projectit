//firebase
import { useContext } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';



const ButtonTest = () => {

  const { getTest } = useContext(DataUserContext)

  
  // getTest(505642,'movie')
 
  return (
    <>
      <button
        onClick={getTest}
        className="btn btn-outline-info me-2"
        type="button"
        >TEST
        </button>
    </>
  )
}
export default ButtonTest;