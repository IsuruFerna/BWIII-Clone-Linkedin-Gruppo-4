import { Form } from "react-bootstrap";
import {
  ChatText,
  EmojiSmile,
  HandThumbsUp,
  SendFill,
  ArrowDownUp,
  HandThumbsUpFill,
} from "react-bootstrap-icons";

import { useState } from "react";

const AddComment = ({ dataId }) => {
  const [liked, setLike] = useState(false);
  const [commentOne, setCommentOne] = useState("");
  const setThelike = () => {
    setLike(!liked);
  };
  const clearInput = () => {
    setCommentOne("");
  };

  const addThisComment = () => {
    fetch("http://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        comment: commentOne,
        rate: "5",
        elementId: dataId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel post del commento");
        }
      })
      .then((commento) => {
        console.log(commento);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  const handleCommentChange = (event) => {
    setCommentOne(event.target.value);
  };

  return (
    <section className="mt-3">
      <div className="d-flex justify-content-around">
        <div
          onClick={() => {
            setThelike();
          }}
          className={
            liked
              ? "d-flex align-items-center col smaller iconPost text-secondary ms-2 liked"
              : "d-flex align-items-center col smaller iconPost text-secondary ms-2"
          }
        >
          {liked ? (
            <HandThumbsUpFill className="text-primary me-1 fs-6" />
          ) : (
            <HandThumbsUp className="me-1" />
          )}{" "}
          Consiglia
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <ChatText className="me-1" /> Commenta
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <ArrowDownUp className="me-1" /> Diffondi il post
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-3">
          <SendFill className="me-1" /> Invia
        </div>
      </div>
      <div>
        <Form className="colors bg-white mx-2 d-flex justify-content-between rounded-pill mt-1">
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
          onClick={() => {
            addThisComment();
            clearInput();
          }}
          className="bg-primary border border-0 rounded-4 mx-1 text-white fs-7 fw-bold ms-1 ps-3 pb-1 pe-3"
        >
          Pubblica
        </button>
      </div>
    </section>
  );
};

export default AddComment;
