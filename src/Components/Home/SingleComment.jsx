const SingleComment = ({ comment }) => {
  return (
    <div className="smaller text-secondary px-1 singleComment">
      <div>{comment.author}</div>
      <div className="text-black px-2">{comment.comment}</div>
    </div>
  );
};
export default SingleComment;
