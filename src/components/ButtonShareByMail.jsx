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
      >Send Mail
      </button>
    </>
  )
}
export default ButtonShareByMail