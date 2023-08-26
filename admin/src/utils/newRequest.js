import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampy.cyclic.cloud/api/",
  withCredentials: true,
});

export default newRequest;
