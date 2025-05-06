import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampyapi.onrender.com/api/",
  withCredentials: false,
});

export default newRequest;
