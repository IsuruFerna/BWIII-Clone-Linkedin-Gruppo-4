import { Container } from "react-bootstrap";

const SinglePost = ({ data }) => {
  return (
    <Container className="my-3 py-1 border-secondary rounded shadow">
      <div>
        <img
          src={data.user.image}
          alt="userimg"
          style={{ width: "50px" }}
          className="rounded-circle"
        />
        <section>
          <div>
            {data.user.name} {data.user.surname}
            <span className="usernameInPosts extrasmall">
              {data.user.username}
            </span>
          </div>
          <div>{data.text}</div>
        </section>
      </div>
    </Container>
  );
};
export default SinglePost;
