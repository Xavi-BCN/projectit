import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import ButtonAddFav from "./ButtonAddFav";
import ButtonShareByMail from "./ButtonShareByMail";
import "../styles/SelectedMovie.css";
import YouTube from "react-youtube";
import ButtonViewQR from "./ButtonViewQR";

const SelectedMovie = () => {
  const {
    userGlobal,
    movie,
    img_path,
    favMoviesUser,
    trailer,
    getMovie,
    setValueMenu,
  } = useContext(DataUserContext);
  const { MovieId, MovieType } = useParams();

  useEffect(() => {
    getMovie(MovieId, MovieType);
    setValueMenu(5);
    window.scroll(0, 0);
  }, []);

  function checkfav() {
    if (favMoviesUser.find((m) => m.idpeli === MovieId)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="container mt-5">
      {movie ? (
        <div
          className="viewtrailer rounded"
          style={{
            backgroundImage: `url("${img_path}${movie.backdrop_path || movie.poster_path}")`,
          }}
        >
          <div className="bg-white ">
            {MovieType === "movie" &&
              (!Boolean(movie?.production_companies?.length)
                ? (<>Sin info de productora</>)
                : (<img className='p-2' width={100} src={`${img_path}${movie.production_companies[0].logo_path}`} alt="e" />)
              )
            }
            {MovieType === "tv" &&
              (<>
                {(!Boolean(movie?.production_companies?.length)
                  ? (<>Sin info de productora</>)
                  : (<img className='p-2' width={100} src={`${img_path}${movie.production_companies[0].logo_path}`} alt="e" />)
                )}
                {(Boolean(movie?.networks?.length) &&
                  (<img className='p-2' width={100} src={`${img_path}${movie.networks[0].logo_path}`} alt="" />))}
              </>)
            }
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="opacity-50 bg-black p-2 rounded mb-3 ">
                <h1 className="text-warning fw-bold">
                  {movie.title}
                  {movie.name}
                </h1>
                {movie.overview ? (
                  <p className="text-white">{movie.overview}</p>
                ) : (
                  <p className="text-white">
                    Parece que no hay informción todavia, quizá mas adelante.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-2 d-flex justify-content-center">
            {movie.genres &&
              movie.genres.map((g) => (
                <label
                  className="bg-info rounded p-1 ms-2 me-2  "
                  type="text"
                  key={g.id}
                >
                  {g.name}
                </label>
              ))}
          </div>
          <div className="d-flex justify-content-center">
            {movie.homepage ? (
              <button
                className="btn btn-info "
                onClick={() => window.open(movie.homepage, "_blank")}
                type="button"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Enlaza con su web"
              >
                Web Oficial
              </button>
            ) : (
              <label className="bg-danger p-1 rounded ms-1" type="text">
                Sin Web
              </label>
            )}
            {userGlobal ? (
              <>
                {checkfav() ? (
                  <></>
                ) : (
                  <ButtonAddFav
                    MovieId={MovieId}
                    MovieType={MovieType}
                    MovieTitle={movie.title}
                    MovieName={movie.name}
                    Poster={movie.backdrop_path}
                    Date={movie.release_date}
                  />
                )}
                <ButtonShareByMail MovieId={MovieId} MovieType={MovieType} />
                <ButtonViewQR MovieId={MovieId} MovieType={MovieType} />
                {/* <ButtonShareByWhatsapp /> */}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="col-11 col-md-8 col-lg-7 mt-sm-2 mt-2 mx-auto">
            {trailer ? (
              <div className="ratio ratio-16x9">
                <YouTube
                  videoId={trailer.key}
                  className="reproductor container"
                  containerClassName={"youtube-container amru"}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 0,
                      controls: 1,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
              </div>
            ) : (
              <h6 className="text-danger fw-bold w-25">
                Lo siento, trailer no disponible
              </h6>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default SelectedMovie;
