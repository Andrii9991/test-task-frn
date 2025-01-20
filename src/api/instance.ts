import axios from "axios";

export const actualUrl = "https://dummyjson.com/";

const defaultHeaders = {
  accept: "application/json",
};
export const instanceApi = axios.create({
  baseURL: actualUrl,
  headers: defaultHeaders,
});
