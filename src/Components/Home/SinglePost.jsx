import { Link } from "react-router-dom";
<<<<<<< HEAD
import CommentTwo from "./commentTwo";

=======
import Comment1 from "./Comment1";
>>>>>>> marco's-branch

const SinglePost = ({ data }) => {
  return (
    <section
      className=" my-3 border-secondary bg-white rounded shadow"
      id="singlePost"
    >
<<<<<<< HEAD
      <div>
        <section className="d-flex align-items-center ">
          <div>
            <img
              src={data.user.image}
              alt="userimg"
              style={{ width: "50px" }}
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
          <div className="px-2 py-4 shadow-sm mt-2 rounded">{data.text}</div>
        </section>
        <section>
          <CommentTwo/>
        </section>
       
      </div>
    </Container>
=======
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
        <div className="d-flex justify-content-center align-items-center">
          {data.image ? <img src={data.image} alt="imaged" fluid /> : null}
        </div>
        <div className="px-2 py-1 mt-2 rounded px-2">{data.text}</div>
      </section>
      <section>
        <Comment1 />
      </section>
    </section>
>>>>>>> marco's-branch
  );
};
export default SinglePost;
