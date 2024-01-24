import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = "http://localhost:8000/";

const token = Cookies.get("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchPost = async (props) => {
  const { page, pageSize } = props;
  const url = `${SERVER_URL}api/post?page=${page}&pageSize=${pageSize}`;
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { fetchPost };
