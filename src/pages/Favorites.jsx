import { Link } from 'react-router-dom'
import fav from "../assets/img/ninopeli3D.png";
import { useContext, useEffect, useState } from "react";
import { DataUserContext } from '../aplication/DataUserContext';
// import '../styles/CardMovie.css'
// import '../styles/Trending.css'
import "../styles/favorites.css"
import ButtonDelFav from "../components/ButtonDelFav";
import ButtonSchudule from "../components/ButtonSchudule"
import { img_300 } from "../aplication/config";
import { Loading } from '../components/Loading';
import ButtonNoViewed from '../components/ButtonNoViewed';
import ButtonViewed from '../components/ButtonViewed';

const Favorites = () => {
  const { userMail, favMoviesUser, loadfavsUser, showLoading, setShowLoading } = useContext(DataUserContext)

  useEffect(() => {  
  }, [favMoviesUser]);

  const checkfavs = () => {
    if(favMoviesUser.length === 0) return <h2 className='text-danger ' >NO HAY FAVORITOS</h2>
  }

  return (
    <>
      
      <div className="pageTitle">Favoritos
        <img src={fav} alt="Fav" width="50px"
          // height="5%"
          className="d-inline-block align-text-top"
        />
      </div>

      {checkfavs()}
      <div className="trending" >
        {favMoviesUser && favMoviesUser.map(item => (
          <>
          <div className=' '>
            <div className='row start-0'>
              <div className='col'>
                <ButtonDelFav idMovie={item.idpeli} />
              </div>
              <div className='col'>
                <ButtonSchudule title={item.title}/>
              </div>
              <div className='col'>
                <ButtonNoViewed />
              </div>
              <div className='col'>
                <ButtonViewed />
              </div>
            </div>
            <div className='row' >
              <Link className='ojo2'  to={`/SelectedMovie/${item.idpeli}/${item.type}`} key={item.idpeli}>
              <div className="cardF bg-dark ms-2 " style={{
                backgroundImage: `url("${img_300}${item.poster}")`,
                }}>
                <span>{item.type}</span>
                <h6 className="fw-bold">{item.title}</h6>
              </div>
              </Link>
            </div>
          </div>
          </>
        ))}
         { showLoading && <Loading />}
      </div>
    </>
  )
}

export default Favorites