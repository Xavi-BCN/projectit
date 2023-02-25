const ButtonShareByMail = ({ MovieId, MovieType }) => {

  const sendMail = () => {
    window.location.href = `mailto:?subject=Te comparto esta peli por si es de tu interes&body=https://xcl.es/#/SelectedMovie/${MovieId}/${MovieType}`;
  };

  return (
    <>
      <button
        onClick={sendMail}
        className="btn btn-info ms-2 "
        type="button"
        data-bs-toggle="tooltip" data-bs-placement="top" title="Abre el correo y añade el enlace a esta página"
      >Send Mail
      </button>
    </>
  )
}
export default ButtonShareByMail