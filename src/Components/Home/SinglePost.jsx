import { Container } from "react-bootstrap";

const SinglePost = ({ data }) => {
  return (
    <Container
      className="my-3 py-1 border-secondary bg-white rounded shadow p-3"
      id="singlePost"
    >
      <div>
        <section className="d-flex align-items-center">
          <div>
            <img
              src={data.user.image}
              alt="userimg"
              style={{ width: "50px" }}
              className="rounded-circle"
            />
          </div>
          <div className="fw-bold ms-3">
            {data.user.name} {data.user.surname}
            <span className="usernameInPosts extrasmall">
              {data.user.username}
            </span>
          </div>
        </section>
        <section>
          <div className="px-2 py-4 shadow-sm mt-2 rounded">{data.text}</div>
        </section>
      </div>
    </Container>
  );
};
export default SinglePost;
