import axios from "axios";
import { SERVER_URL } from "./SERVER_URL";

export const get = (route) => {
  return axios.get(SERVER_URL + route);
};
