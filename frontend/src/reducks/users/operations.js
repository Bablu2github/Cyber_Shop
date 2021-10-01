import API from "../../API";
import { signUpAction, signInAction } from "./actions";
import { push } from "connected-react-router";

const api = new API();
const LOGIN_USER_KEY = "LOGIN_USER_KEY";

export const signUp = (user_name, email, password) => {
  return async (dispatch) => {
    // Validation
    if (user_name === "" || email === "" || password === "") {
      alert("Please fill out name, email, and password.");
      return false;
    }

    return api
      .signUp(user_name, email, password)
      .then((user) => {
        dispatch(signUpAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
      })
      .catch((error) => {
        alert("Failed to connect API to add a post");
        console.log(error);
      });
  };
};