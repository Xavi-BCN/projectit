import axios from "axios";

export const createFavRequest = async (fav) => {
  return await axios.post("http://35.180.86.21:4000/api/createfav", fav);
};

export const FavsUserRequest = async (userMail) => {
  return await axios.get(`http://35.180.86.21:4000/api/userfavs/${userMail}`);
};

export const delFavsUserRequest = async (idMovie, mail) => {
  return await axios.delete(
    `http://35.180.86.21:4000/api/deletemovie/${idMovie}/${mail}`
  );
};
