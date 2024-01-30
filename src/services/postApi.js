import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchPost = async (props) => {
  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { page, pageSize } = props;
  const url = `${SERVER_URL}api/post?page=${page}&pageSize=${pageSize}`;
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const fetchUserPost = async (props) => {
  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { page, pageSize } = props;
  const url = `${SERVER_URL}api/user/post?page=${page}&pageSize=${pageSize}`;
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const fetchLoginUser = async () => {
  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${SERVER_URL}api/user`;
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const logOutUser = () => {
  Cookies.remove("token");
  return;
};

export { fetchPost, fetchLoginUser, logOutUser, fetchUserPost };
