import { Navigate} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';
import Genres from '../components/Genres'
import { TimedKO } from '../aplication/messages'
import SingleCard from '../components/SingleCard'
import CustomPagination from '../components/CustomPagination';
import SelectedMovie from '../components/SelectedMovie';
import '../styles/Trending.css'

const Movies = () => {
  const { userGlobal, getMovies, movies, page, setPage, numOfpages, selectedGenres, setSelectedGenres, genres, setGenres, genreforURL } = useContext(DataUserContext)
  
  useEffect(() => {
    getMovies()
  }, [page, genreforURL])


  if (!userGlobal) {
    TimedKO('Hace falta ser usuario registrado para ver películas!', 'warning')
    return <Navigate to='/Wellcome' />
  }

  return (
    <>
      {/* <div className='container p-1'> */}
        <div className="pageTitle">Películas</div>
        <Genres
          type='movie'
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPageM={setPage}
        />
        <div>
          {numOfpages > 1 && (<CustomPagination setPage={setPage} numOfpages={numOfpages} />)}
        </div>
        <div className="trending">
          {movies && movies.map((m) => (
            <SingleCard 
              key={m.id}
              id={m.id}
              poster={m.poster_path}
              title={m.title}
              date={m.release_date}
              media_type='movie'
              vote_average={m.vote_average}
            />
          ))}
        </div>
      {/* </div> */}
    </>
  )
}

export default Movies