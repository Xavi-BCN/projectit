import { Chip } from '@mui/material';
import { useContext, useEffect } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';

const Genres = ({ type }) => {

    const { getGenres, genres, selectedGenres, setSelectedGenres, setGenres, setPageM, setPageTV } = useContext(DataUserContext)
    
    useEffect(() => {
        getGenres(type);
        /*  return () => {
            setGenres({});
         } */
      }, [])

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id).sort());
        setPageM(1)
        setPageTV(1);
    }

    const handleRemove = (genre) => {
       setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id).sort());
       setGenres([...genres, genre]);
       setPageM(1)
       setPageTV(1);
    }

    const handleReset = () => {
       // Pendent per posar boto per reiniciar
     }
    
    return (
        <>
        <div className="container pb-1">
        {/* <div style={{ padding: "6px 0"}}> */}
        {selectedGenres && selectedGenres.map((sg) => (
                <Chip 
                Key={sg.id}
                label={sg.name}
                style={{margin: 2}}
                size='small'
                color='secondary'
                clickable
                onDelete={()=>handleRemove(sg)} />
            )).sort()}
            {genres && genres.map((g) => (
                <Chip 
                Key={g.name}
                label={g.name}
                style={{margin: 2}}
                size='small'
                color='primary'
                clickable
                onClick={()=>handleAdd(g)} />
            )).sort()}
            
        </div>
        {/* <button
             className='btn btn-danger'
             onClick={handleReset}
             >Reset</button> */}
        </>
  )
}

export default Genres