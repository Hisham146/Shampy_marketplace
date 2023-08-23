import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampy-marketplace.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
