import ImgWellcome from '../assets/img/welcome.png'
import LogoTmdb from '../assets/img/tmdb-logo.svg'


const Wellcome = () => {
  return (
    <>
      <div className='container'>
        <div className='pageTitle'>Bienvenido</div>
        <img src={ImgWellcome} className="img-fluid mx-auto d-block" alt="Wellcome"></img>
        <div className='text-wellcome mt-4'>
          <p>La página de Trending muestra las películas y series de televisión más populares del momento. Esta página se actualiza con frecuencia para mostrar los contenidos mas recientes.</p>
          <p>Las páginas de películas y series de televisión disponen de filtros de categorías para filtrar los resultados que se ven por pantalla. Estos filtros permiten al usuario buscar contenido en base a diferentes criterios como del género como, 'comedia', 'drama', 'acción', etc.</p>
          <p>Además, la web también dispone de una página de búsqueda donde el usuario introduce un texto y el resultado muestra una columna con películas y otra con series de televisión que coincidan con la búsqueda. Esta función permite al usuario encontrar contenido específico sin tener que navegar por todas las categorías. <small className="fw-bold text-warning">(Ver-8.2)</small></p>
          <div>
            <img
              src={LogoTmdb}
              alt=""
              width="30%"
              className="mx-auto d-block"
              // className="d-inline-block mt-2 mx-auto "
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Agradecimientos a TMDB por permitir el uso su API"
            />
            <p className="note">Agradecimientos a TMDB por permitir el uso su API</p>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Wellcome