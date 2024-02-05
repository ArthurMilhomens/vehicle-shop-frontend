import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const api = axios.create({
  baseURL: "https://vhcshop-backend.onrender.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
});

const user = cookies.get("user");

user && (api.defaults.headers.common["Authorization"] = `${user.accessToken}`);
