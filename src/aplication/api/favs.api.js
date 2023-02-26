import axios from "axios"

export const createFavRequest = async (fav)=> {
  return await axios.post('https://13.37.57.122:4000/api/createfav', fav )
}

export const FavsUserRequest = async (userMail)=> {
    return await axios.get(`https://13.37.57.122:4000/api/userfavs/${userMail}`);  
 }

export const delFavsUserRequest = async (idMovie, mail)=> {
   return await axios.delete(`https://13.37.57.122:4000/api/deletemovie/${idMovie}/${mail}`);  
}






