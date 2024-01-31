import Comment from "./Comment";

import profile from "../assets/images/profile.jpg";

const Post = ({ data }) => {
  const { post_user_firstname, post_user_lastname, post_description, post_title, comments } = data;

  return (
    <div className="flex flex-col justify-center rounded-[20px] w-[80%] my-5 bg-indigo-300">
      <div className="bg-indigo-200 rounded-[20px] my-4 mx-4 flex flex-col justify-center">
        <div className="flex items-center ml-6 mt-2">
          <img src={profile} alt="" className="mr-2 rounded-[50%] h-7 w-7" />
          <div>
            <p className="text-base font-semibold flex justify-start items-center">
              {`${post_user_firstname} ${post_user_lastname}`}
            </p>
            <p className="font-mono text-sm flex justify-center items-center">
              {post_title}
            </p>
          </div>
        </div>
        <div className="font-mono text-sm flex justify-center items-center mx-5 my-2">
          {`${post_description} Lorem ipsum dolor sit amet ${post_description} adipisicing elit. Temporibus, ex est perferendis delectus sunt quas velit, optio itaque officia reprehenderit dolore ${post_description} numquam modi laudantium. ${post_description} atque deserunt rem repudiandae at ${post_description} eos expedita iste corporis, velit nobis! Officiis modi iure mollitia totam est deserunt non dolores. Dolorum, expedita ${post_description}.`}
        </div>
      </div>
      {comments.length !== 0 && (
        <div className="bg-indigo-200 rounded-l-[20px] rounded-r-[10px] my-3 mx-4 ">
          <div className="text-blue-600 text-base font-bold ml-5 my-1">
            Comments
          </div>
          {comments.map((comment, index) => {
            return <Comment data={comment} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Post;
