import { createContext, useState } from "react";
import useGenre from '../aplication/hooks/useGenre';
import axios from "axios";
import { createFavRequest, FavsUserRequest, delFavsUserRequest } from '../aplication/api/favs.api'
import { msgOK, msgKO, TimedKO, TimedOK, TimedOKAddFav } from '../aplication/messages'

export const DataUserContext = createContext();

export const DataUserContextProvider = ({ children }) => {
  const [userGlobal, setUserGlobal] = useState(null);
  const [userMail, setUserMail] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [favMoviesUser, setFavMoviesUser] = useState([]);
  const [series, setSeries] = useState([]);
  const [trending, setTrending] = useState([]);
  const [coming, setComing] = useState([]);
  const [pageSearch, setPageSearch] = useState(1)
  const [numOfpages, setNumOfPages] = useState(null)
  const [numOfPagesSearch, setNumOfPagesSearch] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchText, setSearchText] = useState("");
  const [typeSearch, setTypeSearch] = useState(0);
  const [contentSearch, setContentSearch] = useState();
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando película" });
  const [playing, setPlaying] = useState(false);
  const [page, setPage] = useState(1)
  const [valueMenu, setValueMenu] = useState(4);
  //testejos
  const [showMessage, setShowMessage] = useState(false);

  
  const genreforURL = useGenre(selectedGenres);
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "baefddf1e17941ebcd297b1d78537567";
  const img_path = "https://image.tmdb.org/t/p/original";
  const language_es = "es-ES";
  const Spain = "ES";
  const sortM = "primary_release_date.desc";
  const sortTV = "popularity.desc";
  let today;

  /* const getRES = async (media_type) => {
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    const { data } = await axios.get(`${baseURL}/watch/providers/tv?api_key=${apiKey}&language=${language_es}&page=1`);
    console.log(data)
  } */

  /* const getWatchProviders = async (id,media_type) => {
    const { data } = await axios.get(`${baseURL}/${media_type}/${id}/watch/providers`, {
      params: {
        api_key: apiKey,
        //language: language_es, 
      },    
    });
    console.log(data)
  } */

  /* const getVideos = async (id,media_type) => {
    const { data } = await axios.get(`${baseURL}/${media_type}/${id}/videos`, {
      params: {
        api_key: apiKey,
        //language: language_es, 
      },    
    });
    console.log(data)
  } */

  /*  const getImages = async (id,media_type) => {
     const { data } = await axios.get(`${baseURL}/${media_type}/${id}/images`, {
       params: {
         api_key: apiKey,
       },    
     });
     console.log(data)
   } */

  /* const getCredits = async (id,media_type) => {
    const { data } = await axios.get(`${baseURL}/${media_type}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },    
    });
    console.log(data)
  } */

  const selectMovie = async (id, media_type) => {
    getMovie(id, media_type)
    window.scrollTo(0, 0)
  }

  const getGenres = async (whatGenre) => {
    const { data } = await axios.get(`${baseURL}/genre/${whatGenre}/list?api_key=${apiKey}&language=${language_es}`);
    setGenres(data.genres)
  }

  /* const getTrending = async() => {
    const { data } = await axios.get(`${baseURL}/trending/all/day?api_key=${apiKey}&language=${language_es}&sort_by=primary_release_date.asc&page=${page}`);
    setNumOfPages(data.total_pages)
    setTrending(data.results)
  } */

  let current = new Date();
  let year = current.getFullYear(); 
  let month = current.getMonth() + 1;
  let day = current.getDate();
    
  if( month < 10 ) {
    month = '0'+ month
  }
  if( day < 10 ) {
    day = '0'+ day
  } 

  today = year + '-' + month + '-' + day;

  const getComing = async () => {
    const { data } = await axios.get(`${baseURL}/discover/movie?api_key=${apiKey}&language=${language_es}&region=ES&primary_release_date.gte=${year}-${month}-${day}&primary_release_date.lte=${year+3}-12-31&with_original_language=en|fr|es|de|pt|fr|it&sort_by=primary_release_date.asc&page=${page}`);
    
    setNumOfPages(data.total_pages)
    setComing(data.results)
  }


/*   const getComing = async () => {
    const { data } = await axios.get(`${baseURL}/discover/movie?api_key=${apiKey}&language=${language_es}&region=ES&primary_release_date.gte=2023-02-01&primary_release_date.lte=2028-12-31&sort_by=primary_release_date.asc&page=${page}`);
    setNumOfPages(data.total_pages)
    setComing(data.results)
  } */

  const getMovie = async (id, media_type) => {
    
    const { data } = await axios.get(`${baseURL}/${media_type}/${id}`, {
      params: {
        api_key: apiKey,
        language: "es-ES",
        // sort_by: sort,
        append_to_response: "videos",
      },
    });
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      )
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  };

  const getMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data } = await axios.get(`${baseURL}/${type}/movie`, {
      params: {
        api_key: apiKey,
        language: language_es,
        with_genres: genreforURL,
        //include_adult: "true",
        sort_by: "popularity.desc",
        region: Spain,
        query: searchKey,
        page: `${page}`
      },
    });
    data.total_pages > 500 ? setNumOfPages(500) : setNumOfPages(data.total_pages)
    setMovies(data.results);
  };

  const getSeries = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data } = await axios.get(`${baseURL}/${type}/tv`, {
      params: {
        api_key: apiKey,
        language: language_es,
        with_genres: genreforURL,
        //include_adult: "true",
        with_original_language: "en|fr|es|de|pt|it",
        watch_region: "ES",
        sort_by: "popularity.desc",
        region: "ES",
        query: searchKey,
        page: `${page}`
      },
    });
    data.total_pages > 500 ? setNumOfPages(500) : setNumOfPages(data.total_pages)
    setSeries(data.results);
  };

  const getSearch = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/search/${typeSearch ? "tv" : "movie"}?api_key=${apiKey}&language=${language_es}&query=${searchText}&sort_by=primary_release_date.asc&page=${pageSearch}`
      );
      setContentSearch(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
    }
  }

  const saveFav = async (fav) => {
    try {
      const response = await createFavRequest(fav)
      TimedOKAddFav(`Perfecto, añadida a tus favoritas.`)
      loadfavsUser(userMail)
    } catch (error) {
      console.error(error);
    }
  }

  const loadfavsUser = async (userMail) => {
    try {
      const response = await FavsUserRequest(userMail)
      setShowLoading(false)
      setFavMoviesUser(response.data)
    } catch (error) {
      setShowLoading(false)
      error.request.status === 404 ? setFavMoviesUser([]) : TimedKO(error.message)
    }
  }

  const deleteFavUser = async (idMovie, userMail) => {
    try {
      const response = await delFavsUserRequest(idMovie,userMail)
      loadfavsUser(userMail)
    } catch (error) {
    }
  }

  return (
    <DataUserContext.Provider
      value={{
        today,
        baseURL,
        apiKey,
        language_es,
        userGlobal,
        setUserGlobal,
        userMail,
        setUserMail,
        trending,
        setTrending,
        movies,
        setMovies,
        series,
        setSeries,
        coming,
        setComing,
        genreforURL,
        getGenres,
        selectedGenres,
        setSelectedGenres,
        genres,
        setGenres,
        searchKey,
        setSearchKey,
        trailer,
        setTrailer,
        numOfpages,
        setNumOfPages,
        setPage,
        page,
        movie,
        setMovie,
        playing,
        setPlaying,
        // getTrending,
        getComing,
        getMovies,
        getSearch,
        getSeries,
        getMovie,
        selectMovie,
        img_path,
        pageSearch,
        setPageSearch,
        typeSearch,
        setTypeSearch,
        searchText,
        setSearchText,
        contentSearch,
        setNumOfPagesSearch,
        numOfPagesSearch,
        setShowMessage,
        showMessage,
        valueMenu,
        setValueMenu,
        favMoviesUser,
        setFavMoviesUser,
        saveFav,
        loadfavsUser,
        deleteFavUser,
        showLoading,
        setShowLoading
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
};
