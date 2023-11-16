import { Form } from "react-bootstrap";
import {
  ChatText,
  EmojiSmile,
  HandThumbsUp,
  SendFill,
  ArrowDownUp,
} from "react-bootstrap-icons";

import "./Comment1.css";
import { useEffect, useState } from "react";

const Comment1 = () => {
  const [commentOne, setCommentOne] = useState("");

  useEffect(() => {
    // theComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const theComment = () => {
  //   fetch("http://striveschool-api.herokuapp.com/api/comments/", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       comment: commentOne,
  //       rate: "string",
  //       postId: "string",
  //     }),

  //     headers: {
  //       "Content-Type": "application/json",
  //       Autorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQxNWM1NWU3ZTAwMThmODNjMDkiLCJpYXQiOjE2OTk4Njc5MjUsImV4cCI6MTcwMTA3NzUyNX0.0KwTdqvayjQdOxqZSoP5K1vH6-yrEjZxVuzjFfmzDU0",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error("erroreee");
  //       }
  //     })
  //     .then((commento) => {
  //       console.log("commenti", commento);
  //       theComment(commento);
  //     })
  //     .catch((err) => {
  //       console.log("errore", err);
  //     });
  // };

  const handleCommentChange = (event) => {
    setCommentOne(event.target.value);
  };

  return (
    <section>
      <div className="d-flex justify-content-around">
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <HandThumbsUp className="me-1" /> Consiglia
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <ChatText className="me-1" /> Commenta
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <ArrowDownUp className="me-1" /> Diffondi il post
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <SendFill className="me-1" /> Invia
        </div>
      </div>
      <div>
        <Form className="colors bg-white d-flex justify-content-between rounded-pill mt-1">
          <Form.Control
            id="inputFieldInForm"
            placeholder="Aggiungi un commento..."
            aria-label="text"
            className="FormControl rounded-5  border-secondary w-100 smaller  "
            value={commentOne}
            onChange={handleCommentChange}
          ></Form.Control>
          <button className="bottoneDentroForm rounded-pill border-0">
            <EmojiSmile />
          </button>

          <img
            src="https://play-lh.googleusercontent.com/GkhngtFrSb3G9WXkWxJ9IRppbGVbNy7b_xyqa12Xa-Y3My_SXtsLamI5kR6or5zWGA=w240-h480-rw"
            alt=""
            width={"38px"}
            className="d-flex"
          />
        </Form>
        <button
          variant="primary"
          // onClick={theComment}
          className="bg-primary border border-0 rounded-4 mt-2 text-white fs-7 fw-bold ms-1 ps-3 pb-1 pe-3"
        >
          Pubblica
        </button>
      </div>
    </section>
  );
};

export default Comment1;
