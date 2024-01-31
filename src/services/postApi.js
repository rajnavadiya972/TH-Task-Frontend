import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const setHeader = () => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Unauthorize access!")
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers
}

export const fetchPost = async (props) => {
  const headers = setHeader();
  const { page, pageSize } = props;
  const url = `${SERVER_URL}api/post?page=${page}&pageSize=${pageSize}`;
  try {
    const res = await axios.get(url, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const fetchUserPost = async (props) => {
  const headers = setHeader();
  const { page, pageSize } = props;
  const url = `${SERVER_URL}api/user/post?page=${page}&pageSize=${pageSize}`;
  try {
    const res = await axios.get(url, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const fetchLoginUser = async () => {
  const headers = setHeader();
  const url = `${SERVER_URL}api/user`;
  try {
    const res = await axios.get(url, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const logOutUser = () => {
  Cookies.remove("token");
  return;
};
