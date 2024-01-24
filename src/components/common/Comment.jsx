const Comment = ({ data }) => {
  const { comment_user_firstname, comment_user_lastname, comment_description } = data;
  return (
    <div className="bg-indigo-200 border-2 rounded-[20px] w-60 h-20 my-4 mx-4 flex flex-col justify-center">
      <p className="text-sm font-light flex justify-center items-center">
        {`${comment_user_firstname} ${comment_user_lastname}`}
      </p>
      <p className="font-semibold text-lg flex justify-center items-center">
        {comment_description}
      </p>
    </div>
  );
};

export default Comment;
