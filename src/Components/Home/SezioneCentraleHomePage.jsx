import { useEffect, useState } from "react";
import AllThePosts from "./AllThePosts";
import AddPost from "./AddPost";

const SezioneCentraleHomePage = () => {
  //   const [datas, setDatas] = useState({});
  const [post, setPost] = useState([]);

  const myPostsFetch = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting posts-data");
        }
      })
      .then((datas) => {
        setPost(datas.reverse());
      })
      .catch((err) => console.log("Errore: ", err));
  };
  useEffect(() => {
    myPostsFetch();
  }, [post]);
  return (
    <div>
      <AddPost />
      <AllThePosts datas={post} />
    </div>
  );
};
export default SezioneCentraleHomePage;
