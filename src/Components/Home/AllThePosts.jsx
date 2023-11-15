import SinglePost from "./SinglePost";

const AllThePosts = ({ datas }) => {
  return (
    <div>
      {datas.map((singleData) => {
        return <SinglePost key={singleData._id} data={singleData} />;
      })}
    </div>
  );
};
export default AllThePosts;
