import { useEffect, useState } from "react";
import InputFieldForPost from "./InputFieldForPost";

const AddPost = () => {
  const [me, setMe] = useState({});
  const myFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data retreaving error!");
        }
        return response.json();
      })
      .then((data) => {
        setMe(data);
      })
      .catch((err) => console.log("ERROR: ", err));
  };
  useEffect(() => {
    myFetch();
  }, []);
  return (
    <section className="shadow bg-white">
      <div className="border-bottom bg-white p-1 d-flex align-items-center mt-1 ">
        <div>
          <img
            src={me.image}
            alt="user_image"
            style={{ width: "40px" }}
            className="rounded-circle"
          />
        </div>
        <div className="fw-bold mx-2">
          {me.name} {me.surname}
          <span className="usernameInPosts fw-normal ms-1 extrasmall">
            {me.username}
          </span>
        </div>
      </div>
      <div>
        <InputFieldForPost />
      </div>
    </section>
  );
};
export default AddPost;
