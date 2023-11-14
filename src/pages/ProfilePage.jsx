import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../Components/User/User";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while gettind id-datas");
        }
      })
      .then((datas) => {
        setUser(datas);
      })
      .catch((err) => console.log("Error: ", err));
  }, [id]);
  return <User user={user} />;
};
export default ProfilePage;
