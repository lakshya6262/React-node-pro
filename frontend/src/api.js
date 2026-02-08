import axios from "axios";

export const getData = () =>
  axios.get("http://localhost:5000/api/data");
