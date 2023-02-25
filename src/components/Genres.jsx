import { Chip } from '@mui/material';
import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';

const Genres = ({ type }) => {

  const { getGenres, genres, selectedGenres, setSelectedGenres, setGenres, setPage } = useContext(DataUserContext)

  useEffect(() => {
    getGenres(type);
    /*  return () => {
        setGenres({});
     } */
  }, [])

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id).sort());
    setPage(1)
  }

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id).sort());
    setGenres([...genres, genre]);
    setPage(1)
  }

  return (
    <>
      <div className="container pb-1">
        {selectedGenres && selectedGenres.map((sg) => (
          <Chip
            Key={sg.id}
            label={sg.name}
            style={{ margin: 2 }}
            size='small'
            color='secondary'
            clickable
            onDelete={() => handleRemove(sg)} />
        )).sort()}
        {genres && genres.map((g) => (
          <Chip
            Key={g.name}
            label={g.name}
            style={{ margin: 2 }}
            size='small'
            color='primary'
            clickable
            onClick={() => handleAdd(g)} />
        )).sort()}
      </div>
    </>
  )
}

export default Genres