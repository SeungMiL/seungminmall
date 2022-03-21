import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMxMTZmYmQ5YWQ4MzIzNjUyMDc4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzcwMjk1MywiZXhwIjoxNjQ3OTYyMTUzfQ.3QrDAcHMUwkwJu7DD8xxIht65blgbm93FztAw7Vv4rE";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMxMTZmYmQ5YWQ4MzIzNjUyMDc4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzc2NDI4MiwiZXhwIjoxNjQ4MDIzNDgyfQ.fx_TFPb5HGZiwru21TC5JFie5sHBgeH4zuNkh0wsGHQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
