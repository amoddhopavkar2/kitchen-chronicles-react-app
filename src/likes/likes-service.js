import axios from "axios";

const BASE_API_URL = process.env.REACT_API_BASE || "http://localhost:4000";
const USERS_URL = BASE_API_URL + "/users";
const LIKES_URL = USERS_URL + "/:uid/likes/:mid";

const api = axios.create({ withCredentials: true });

export const userLikesFood = async (mid) => {
  const response = await api.post(`${USERS_URL}/likes/${mid}`);
  return response.data;
};

export const findFoodLikedByUser = async (uid) => {
  const response = await api.get(`${USERS_URL}/${uid}/likes`);
  return response.data;
};
