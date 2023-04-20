import axios from "axios";

const BASE_API_URL = process.env.REACT_API_BASE || "https://api.macbeth98.com";
const USERS_URL = BASE_API_URL + "/users";
const LIKES_URL = USERS_URL + "/likes";

const api = axios.create({ withCredentials: true });

export const createLike = async (like) => {
  console.log(like);
  const response = await api.post(`${LIKES_URL}/${like.idMeal}`, like);
  return response.data;
};

export const findLikesByUser = async (user) => {
  const response = await api.get(`${USERS_URL}/${user}/likes`);
  return response;
};
