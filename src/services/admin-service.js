import axios from "axios";

const BASE_API_URL = process.env.REACT_API_BASE || "http://localhost:4000";

export const userStats = async () => {
  const response = await axios.get(`${BASE_API_URL}/stats`);
  return response.data;
};
