import { useState, useEffect } from "react";
import Header from "../common/Header";
import { fetchPost } from "../../services/postApi";
import Post from "../common/Post";
import PaginationBar from "../common/PaginationBar";
import Dropdown from "../common/Dropdown";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const [isPostLoaded, setIsPostLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSelectionChange = (event, value) => {
    setPageSize(event.target.value);
  };

  const fetchPostData = async (page, pageSize) => {
    return await fetchPost({ page, pageSize });
  };

  useEffect(() => {
    setIsPostLoaded(false);
    fetchPostData(page, pageSize)
      .then((res) => {
        if (res.error) {
          navigate("/login");
        } else {
          setIsPostLoaded(true);
          setTotalPage(res.totalPages);
          setPosts(res.data);
        }
      })
      .catch((e) => {});
  }, [page, pageSize]);

  return (
    <>
      {isPostLoaded ? (
        <>
          <Header />
          <div className="flex justify-center bg-indigo-100 m-3 rounded-[20px]">
            <Dropdown
              onChange={handleSelectionChange}
              value={pageSize}
            />
          </div>
          <div className="grid grid-cols-3 justify-items-center bg-indigo-100 mx-3 mt-3 rounded-[20px]">
            {posts.map((post, index) => {
              return <Post data={post} key={index} />;
            })}
          </div>
          <div className="flex justify-center bg-indigo-100 m-3 rounded-[20px]">
            <PaginationBar
              count={totalPage}
              onChange={handlePageChange}
              defaultPage={page}
            />
          </div>
        </>
      ) : (
        <p className="flex justify-center text-lg font-bold text-blue-800">
          Loading...
        </p>
      )}
    </>
  );
};

export default Dashboard;
