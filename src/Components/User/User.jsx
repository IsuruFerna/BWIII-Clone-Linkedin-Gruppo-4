import { Button, Card, Col, Container, Row } from "react-bootstrap";

import PotrestiConoscere from "../Me/PotrestiConoscere";
import { useEffect, useState } from "react";
import SinglePost from "../Home/SinglePost";
import Footer from "../main/footer";

const User = ({ user, add }) => {
  const [usersPost, setUserPost] = useState([]);
  const [innerText, setInnerText] = useState(add);
  const changeInnerText = () => {
    setInnerText(!innerText);
  };
  const fetchForPosts = () => {
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
        setUserPost(datas);
      })
      .catch((err) => console.log("Errore: ", err));
  };
  useEffect(() => {
    fetchForPosts();
  }, []);
  return (
    <>
      <Container className=" my-2">
        <Row className="justify-content-center">
          <Col className="col-6">
            <Row>
              <Card className="shadow">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src="https://placedog.net/1000/200"
                    className="w-100"
                  />
                  <div>
                    <img
                      src={user.image}
                      className="rounded-circle"
                      id="userImage"
                      alt="user"
                    />
                  </div>
                </div>
                <Card.Body className="pt-5">
                  <Card.Title className="fw-bolder">
                    {user.name} {user.surname} /
                    <span className="text-secondary smaller fw-normal">
                      {user.username}
                    </span>
                  </Card.Title>
                  <Card.Text className="smaller">
                    <div className="fw-bold">{user.title}</div>
                    <div>{user.email}</div>
                  </Card.Text>

                  <Card.Text>
                    <Button
                      className={
                        innerText === false
                          ? "btn-primary rounded-4"
                          : "btn-light rounded-4 border-primary text-primary"
                      }
                      onClick={() => {
                        changeInnerText();
                      }}
                    >
                      {innerText === false
                        ? "Invia richiesta di amicizia"
                        : "Richiesta Inviata"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <div>
                {usersPost
                  .filter((singleData) => singleData.user._id === user._id)
                  .map((singlePost) => (
                    <SinglePost data={singlePost} />
                  ))}
              </div>
            </Row>
          </Col>
          <Col className="col-2">
            <PotrestiConoscere />
          </Col>
        </Row>
        <Row className="justify-content-center"></Row>
      </Container>
      <Footer />
    </>
  );
};
export default User;
