export const SIGN_UP = "SIGN_UP";
export const signUpAction = (user) => {
  return {
    type: "SIGN_UP",
    payload: user,
  };
};