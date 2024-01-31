import profile from "../assets/images/profile.jpg";

const Comment = ({ data }) => {
  const { comment_user_firstname, comment_user_lastname, comment_description } = data;
  return (
    <div className="bg-indigo-200 border-2 rounded-[20px] my-2 mx-4 flex items-center">
      <div className="ml-3">
        <img src={profile} alt="" className="mr-2 rounded-[50%] h-7 w-7" />
      </div>
      <div>
        <p className="text-base font-semibold">
          {`${comment_user_firstname} ${comment_user_lastname}`}
        </p>
        <p className="font-mono text-sm">
          {`${comment_description} Lorem ipsum dolor sit amet consectetur ${comment_description}.`}
        </p>
      </div>
    </div>
  );
};

export default Comment;
