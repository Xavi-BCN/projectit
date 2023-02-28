import { ImEye } from "react-icons/im";

const ButtonViewed = () => {
  return (
    <>
      <button
        className="btn ms-1 w-25"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Ya se ha estrenado"
      >
        <ImEye color="green" size={25}></ImEye>
      </button>
    </>
  );
};
export default ButtonViewed;
