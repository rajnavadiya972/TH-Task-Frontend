import "../../assets/styles/components/Post.css";
import Comment from "./Comment";

const Post = ({ data }) => {
  const {
    post_user_firstname,
    post_user_lastname,
    post_description,
    post_title,
    comments,
  } = data;
  return (
    <div className="flex flex-col rounded-[20px] w-80 h-96 my-5 bg-indigo-300">
      <div className="bg-indigo-200 rounded-[20px] w-72 h-20 my-4 mx-4 flex flex-col justify-center">
        <p className="text-sm font-light flex justify-center items-center">
          {`${post_user_firstname} ${post_user_lastname}`}
        </p>
        <p className="font-semibold text-base flex justify-center items-center">
          {post_title}
        </p>
        <p className="font-mono text-base flex justify-center items-center">
          {post_description}
        </p>
      </div>
      <div className="bg-indigo-200 rounded-l-[20px] rounded-r-[10px] w-72 h-60 my-3 mx-4 overflow-y-scroll">
        {comments.map((comment, index) => {
          return <Comment data={comment} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Post;
