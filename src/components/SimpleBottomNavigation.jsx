
import { useState, useEffect, useContext } from 'react';
import { DataUserContext } from '../aplication/DataUserContext';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import UpdateIcon from '@mui/icons-material/Update';
import '../styles/SimpleBottomNavigation.css'

export default function SimpleBottomNavigation() {

  const { userGlobal, setPage, valueMenu, setValueMenu } = useContext(DataUserContext);
   
  const navigate = useNavigate();


  useEffect(()=>{
    if(valueMenu ===0 ){
      navigate("/trending")
    }else if(valueMenu === 1){
      navigate("/movies")
    }else if(valueMenu === 2){
      navigate("/series")
    }else if(valueMenu === 3){
      navigate("/coming")
    }
    setPage(1)
    
  },[valueMenu]);

  return (
    <div className='botonera'>
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={valueMenu}
        onChange={(event, newValue) => {
          setValueMenu(newValue);
        }}
      >
        <BottomNavigationAction
          //  style={{ color: 'blue'}}
           label="Trending"
           icon={<WhatshotIcon />} />

        <BottomNavigationAction
          label="Películas"
          icon={<MovieIcon />} />
        
        <BottomNavigationAction
          label="Series"
          icon={<TvIcon />} />

        <BottomNavigationAction
          label="Coming"
          icon={<UpdateIcon />} />
        
       {/*  <BottomNavigationAction
          label="Buscar"
          icon={<SearchIcon />} /> */}
      </BottomNavigation>
    </Box>
    </div>
  );
}