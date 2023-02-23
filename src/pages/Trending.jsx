import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';
import axios from 'axios';
import { TimedKO } from '../aplication/messages'
import SingleCard from '../components/SingleCard'
import CustomPagination from '../components/CustomPagination';
import '../styles/Trending.css'

const Trending = () => {
  
  // const { userGlobal, getTrending, trending, page, setPage, numOfpages } = useContext(DataUserContext);
  const { userGlobal, setTrending, trending, page, setPage, setNumOfPages, numOfpages, baseURL, apiKey, language_es, loadfavsUser } = useContext(DataUserContext);

  const getTrending = async() => {
    const { data } = await axios.get(`${baseURL}/trending/all/day?api_key=${apiKey}&language=${language_es}&sort_by=primary_release_date.asc&page=${page}`);
    setNumOfPages(data.total_pages)
    setTrending(data.results)
  }

  if (!userGlobal) {
    TimedKO('Sin estar registrado solo verás 1 pag.', 'warning')
  }

  useEffect(()=>{
    getTrending()
    //loadfavsUser(userMail)
  },[page])
  
  return (
    <>
      <div className="pageTitle">Trending</div>
            <div>
            {userGlobal ? (<CustomPagination setPage={setPage} numOfpages={numOfpages} />):(<CustomPagination setPage={setPage} numOfpages={1} />)}
            </div>
        <div className="trending">
          { trending && trending.map((t) => ( 
            <SingleCard
            key={t.id}
            id={t.id}
            poster={t.poster_path}
            title={t.title || t.name}
            date={t.first_air_date || t.release_date}
            media_type={t.media_type}
            vote_average={t.vote_average}
            />
            ))}
        </div>
     </>
   )
}

export default Trending


