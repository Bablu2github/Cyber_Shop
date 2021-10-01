import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
    signUp = async (user_name, email, password) => {
        const formData = new FormData();
        formData.append("user_name", user_name);
        formData.append("email", email);
        formData.append("password", password);
        const savedPost = await api
          .post("/user/signup/", formData)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return savedPost;
      };
    };
