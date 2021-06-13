import axios from "axios";

const API_URL = "http://localhost:5000/lms/";

 const register = (user) => {
  return axios.post(API_URL + "signup", user);
};

 const login = (loginUser) => {
  return axios
    .post(API_URL + "login", loginUser);
};

const AuthService = { register, login };

export default AuthService;
