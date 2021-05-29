import axios from "axios";

const api = axios.create({
  baseURL: "https://produtos-alest-default-rtdb.firebaseio.com/",
});

export default api;
