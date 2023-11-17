const SingleComment = ({ comment }) => {
  return (
    <div className="smaller text-secondary border px-1 singleComment">
      <div>{comment.author}</div>
      <div className="text-black px-1">{comment.comment}</div>
    </div>
  );
};
export default SingleComment;
