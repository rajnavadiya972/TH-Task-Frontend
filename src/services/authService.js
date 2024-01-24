import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const signUp = async (body) => {
  try {
    const res = await axios.post(SERVER_URL + "user/signup", body);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
const logIn = async (body) => {
  try {
    const res = await axios.post(SERVER_URL + "user/signin", body);
    const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
    const expireToken = {
      expires: oneHour,
    };
    Cookies.set("token", res.data.token, expireToken);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { signUp, logIn };
