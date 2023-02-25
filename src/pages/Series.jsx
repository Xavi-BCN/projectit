import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';
import Genres from '../components/Genres'
import { TimedKO } from '../aplication/messages'
import SingleCard from '../components/SingleCard'
import CustomPagination from '../components/CustomPagination';
import '../styles/Trending.css'

const Series = () => {

  const { userGlobal, getSeries, series, page, setPage, numOfpages, genreforURL } = useContext(DataUserContext)

  useEffect(() => {
    getSeries()
  }, [page, genreforURL])

  if (!userGlobal) {
    TimedKO('Hace falta ser usuario registrado para ver series de TV!', 'warning')
    return <Navigate to='/Wellcome' />
  }
  return (
    <>
      <div className="pageTitle">Series</div>
      <Genres
        type='tv'
      />
      <div>
        {numOfpages > 1 && (<CustomPagination setPage={setPage} numOfpages={numOfpages} />)}
      </div>
      <div className="trending">
        {series && series.map((s) => (
          <SingleCard
            key={s.id}
            id={s.id}
            poster={s.poster_path}
            title={s.name}
            date={s.first_air_date}
            media_type='tv'
            vote_average={s.vote_average}
          />
        ))}
      </div>
    </>
  )
}

export default Series;