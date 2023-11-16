import { Container, Form } from "react-bootstrap";
import {
  ChatText,
  EmojiSmile,
  HandThumbsUp,
  SendFill,
  Image,
  ArrowDownUp,
} from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "./Comment1.css";
import { useEffect, useState } from "react";

const Comment1 = () => {
  const [commentOne, setCommentOne] = useState("");
  const [makeCommentOne, setmakeCommentOne] = useState(null);

  useEffect(() => {
    theComment();
  }, []);

  const theComment = () => {
    fetch("http://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        comment: commentOne,
        rate: "string",
        postId: "string",
      }),

      headers: {
        "Content-Type": "application/json",
        Autorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQxNWM1NWU3ZTAwMThmODNjMDkiLCJpYXQiOjE2OTk4Njc5MjUsImV4cCI6MTcwMTA3NzUyNX0.0KwTdqvayjQdOxqZSoP5K1vH6-yrEjZxVuzjFfmzDU0",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("erroreee");
        }
      })
      .then((commento) => {
        console.log("commenti", commento);
        theComment(commento);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  const handleCommentChange = (event) => {
    setCommentOne(event.target.value);
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link
                href="#first"
                className="text-secondary bg-white smaller"
              >
                <HandThumbsUp className=" mb-1" /> Consiglia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#second"
                className="bg-white ms-1 text-secondary smaller "
              >
                <ChatText className="mb-1" /> Commenta
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#third"
                className="bg-white ms-1 text-secondary smaller"
              >
                <ArrowDownUp /> Diffondi il post
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#four"
                className="bg-white ms-1 text-secondary smaller"
              >
                <SendFill className="mb-1" /> Invia
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <img
              src="https://play-lh.googleusercontent.com/GkhngtFrSb3G9WXkWxJ9IRppbGVbNy7b_xyqa12Xa-Y3My_SXtsLamI5kR6or5zWGA=w240-h480-rw"
              alt=""
              width={"38px"}
              className="d-flex"
            ></img>
            <Form className="colors bg-white d-flex justify-content-between rounded-pill ">
              <Form.Control
                placeholder="Aggiungi un commento..."
                aria-label="text"
                className="FormControl rounded-5  border-secondary w-100 smaller  "
                value={commentOne}
                onChange={handleCommentChange}
              ></Form.Control>
              <button className="bottoneDentroForm rounded-pill">
                <EmojiSmile />
              </button>
              <button className="rounded-pill border border-white">
                <Image className="me-2 " />
              </button>
            </Form>
            <button
              variant="primary"
              onClick={theComment}
              className="bg-primary border border-0 rounded-4 mt-2 text-white fs-7 fw-bold ms-1 ps-3 pb-1 pe-3"
            >
              Pubblica
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Comment1;
