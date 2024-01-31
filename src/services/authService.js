import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const signUp = async (body) => {
  const url = `${SERVER_URL}user/signup`;
  try {
    const res = await axios.post(url, body);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const logIn = async (body) => {
  const url = `${SERVER_URL}user/signin`;
  try {
    const res = await axios.post(url, body);
    const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
    const expireToken = {
      expires: oneHour,
    };
    Cookies.set("token", res.data.token, expireToken);
    return res;
  } catch (error) {
    return error.response;
  }
};
