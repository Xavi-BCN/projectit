import Swal from "../../node_modules/sweetalert2/dist/sweetalert2";
import "../../node_modules/sweetalert2/dist/sweetalert2.css";

export const msgOK = (messageText) => {
  Swal.fire("¡Perfecto!", messageText, "success");
};

export const msgKO = (messageText) => {
  Swal.fire("¡Hubo un error!", messageText, "error");
};

export const TimedOK = (messageText) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${messageText}`,
    showConfirmButton: false,
    timer: 3000,
  });
};

export const TimedOKAddFav = (messageText) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${messageText}`,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const TimedKO = (messageText, icon) => {
  Swal.fire({
    position: "center",
    icon: `${icon}`,
    title: `${messageText}`,
    showConfirmButton: false,
    timer: 3000,
  });
};
