import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const AllThePosts = ({ datas }) => {
  const [comment, setComment] = useState([]);
  const myCommentsFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("Error while getting the comments");
      })
      .then((data2) => {
        console.log(data2);
        setComment(data2);
      })
      .catch((err) => console.log("Error: ", err));
  };
  useEffect(() => {
    myCommentsFetch();
  }, [comment]);
  return (
    <div>
      {console.log(datas)}
      {datas.map((singleData) => {
        return (
          <SinglePost
            key={singleData._id}
            data={singleData}
            comment={comment}
          />
        );
      })}
    </div>
  );
};
export default AllThePosts;
