import axios from "axios";
export const AxiosCall = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    // "Authorization": `Bearer ${localStorage.getItem("aggadoo-token")}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});