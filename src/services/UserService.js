import axios from "./customize-axios";

export const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export const createUser = (name, job) => {
  return axios.post("/api/users", {name, job});
};
