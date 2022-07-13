import { API_HOST, API_KEY } from "../utils/constants";

export const getTop250Movies = async () => {
    
  const url = `${API_HOST}Top250Movies/${API_KEY}`;

  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch(error => console.log(error));
}

export const getTrailerById = async (id:string) => {

  const url = `${API_HOST}Trailer/${API_KEY}/${id}`;

  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch(error => console.log(error));
}