import { GiPopcorn } from "react-icons/gi";

const ButtonSchudule = ({ title }) => {
  return (
    <>
      <button
        onClick={() => {
          window.open(`https://www.google.com/search?q=cartelera+${title}`);
        }}
        className="btn ms-1 w-25 border-0"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Información de cartelera en caso de estreno"
      >
        <GiPopcorn color="cyan" size={25}></GiPopcorn>
      </button>
    </>
  );
};
export default ButtonSchudule;
