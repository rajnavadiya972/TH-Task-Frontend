import axios from "axios";

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
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { signUp, logIn };
