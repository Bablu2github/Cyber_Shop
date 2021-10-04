import API from "../../API";
import { signUpAction, signInAction } from "./actions";
import { push } from "connected-react-router";

const api = new API();
const LOGIN_USER_KEY = "LOGIN_USER_KEY";

export const signUp = (username, email, password) => {
  return async (dispatch) => {
    // Validation
    if (username === "" || email === "" || password === "") {
      alert("Please fill out name, email, and password.");
      return false;
    }

    return api
      .signUp(username, email, password)
      .then((user) => {
        dispatch(signUpAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
      })
      .catch((error) => {
        alert("Failed to add a user");
        console.log(error);
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    // Validation
    if (email === "" || password === "") {
      alert("Please fill out email and password.");
      return false;
    }

    return api
      .signIn(email, password)
      .then((user) => {
        dispatch(signInAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
        console.log("Logged in");
      })
      .catch((error) => {
        alert("Failed to connect API to add a post");
        console.log(error);
      });
  };
};