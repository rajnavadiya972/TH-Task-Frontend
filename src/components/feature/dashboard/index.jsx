import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Toaster } from 'react-hot-toast';

import Header from "../../common/Header";
import { fetchPost } from "../../../services/postApi";
import Post from "../../common/Post";
import PaginationBar from "../../common/PaginationBar";
import Dropdown from "../../common/Dropdown";

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [isPostLoaded, setIsPostLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSelectionChange = (event, value) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    const fetchPostData = async (page, pageSize) => {
      setIsPostLoaded(false);
      const res = await fetchPost({ page, pageSize });
      if (res.error) {
        navigate("/login");
      } else {
        setIsPostLoaded(true);
        setTotalPage(res.totalPages);
        setPosts(res.data);
      }
    };
    fetchPostData(page, pageSize);
  }, [page, pageSize]);

  return (
    <>
      {isPostLoaded ? (
        <>
          <Header isLoggedIn isDashboard />
          <div className="grid grid-cols-3 justify-items-center bg-indigo-100 mx-3 mt-3 rounded-[20px]">
            {posts.map((post, index) => {
              return <Post data={post} key={index} />;
            })}
          </div>
          <div className="flex items-center justify-center bg-indigo-100 m-3 rounded-[20px]">
            <PaginationBar
              className="mx-auto"
              count={totalPage}
              onChange={handlePageChange}
              defaultPage={page}
            />
            <Dropdown
              className="mr-10"
              onChange={handleSelectionChange}
              value={pageSize}
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Dashboard;
