import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampy-api.cyclic.cloud/api/",
  withCredentials: true,
});

export default newRequest;
