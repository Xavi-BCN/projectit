import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';
import { Navigate} from 'react-router-dom';
import { TimedKO, msgKO } from '../aplication/messages'
import SingleCard from '../components/SingleCard'
import CustomPagination from '../components/CustomPagination';
import '../styles/Trending.css'

const Coming = () => {
  
  const { userGlobal, getComing, coming, page, setPage, numOfpages } = useContext(DataUserContext);

  useEffect(()=>{
    try{
      getComing()
    }catch{
      msgKO('No se han encontrado datos de coming')
    }
  },[page])

  if (userGlobal === "") {
    TimedKO('Hace falta ser usuario registrado para ver próximos estrenos!', 'warning')
    return <Navigate to='/Wellcome' />
  }
  
  return (
    <>
      <div className="pageTitle">Coming</div>
            <div>
              <CustomPagination setPage={setPage} numOfpages={numOfpages} />
            </div>
        <div className="trending">
          { coming && coming.map((c) => ( 
            <SingleCard
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type= 'movie'
            vote_average={c.vote_average}
            />
            ))}
        </div>
      
     </>
   )
}

export default Coming


