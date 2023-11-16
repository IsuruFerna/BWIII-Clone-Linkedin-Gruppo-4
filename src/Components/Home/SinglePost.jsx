import { Link } from "react-router-dom";
import Comment1 from "./Comment1";
import "./SinglePost.css";

const SinglePost = ({ data }) => {
   return (
      <section
         className=" my-3 border-secondary bg-white rounded shadow"
         id="singlePost"
      >
         <section className=" p-1 d-flex align-items-center">
            <div className="d-flex align-items-center">
               <img
                  src={data.user.image}
                  alt="userimg"
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
               />
            </div>
            <div className="fw-bold ms-3">
               <Link to={`/profile/${data.user._id}`} className="nav-link">
                  {data.user.name} {data.user.surname}
                  <span className="usernameInPosts extrasmall px-2">
                     {data.user.username}
                  </span>
               </Link>
            </div>
         </section>
         <section>
            <div className="px-2 py-2 shadow-sm mt-2 rounded d-flex flex-column align-items-center">
               <div className="post-photo mb-2">
                  {data.image && (
                     <img src={data.image} alt="immagine caricata" />
                  )}
               </div>
               <div className="d-flex align-self-lg-start ">{data.text}</div>
            </div>
         </section>
         <section>
            <Comment1 />
         </section>
      </section>
   );
};
export default SinglePost;
