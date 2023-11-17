import { Form, InputGroup } from "react-bootstrap";
import {
  ChatText,
  EmojiSmile,
  HandThumbsUp,
  SendFill,
  ArrowDownUp,
  HandThumbsUpFill,
  Image,
} from "react-bootstrap-icons";

import { useRef, useState } from "react";

const AddComment = ({ dataId }) => {
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const inputRef = useRef(null);

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
    <section className="pt-3 border-top">
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
            <HandThumbsUpFill className="text-primary fs-5" />
          ) : (
            <HandThumbsUp className="fs-6" />
          )}
          <span className="mx-1">Consiglia</span>
        </div>
        <div
          onClick={handleClick}
          className="d-flex align-items-center col smaller iconPost text-secondary ms-2"
        >
          <ChatText className="fs-6" />
          <span className="mx-1">Commenta</span>
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-2">
          <ArrowDownUp className="fs-6" />
          <span className="mx-1">Diffondi il post</span>
        </div>
        <div className="d-flex align-items-center col smaller iconPost text-secondary ms-3">
          <SendFill className="fs-6" />
          <span className="mx-1">Invia</span>
        </div>
      </div>
      <div>
        <Form className="colors bg-white mx-2 d-flex justify-content-between rounded-pill mt-1">
          {/* <Form.Control
            ref={inputRef}
            id="inputFieldInForm"
            placeholder="Aggiungi un commento..."
            aria-label="text"
            className="FormControl rounded-5  border-secondary w-100 smaller  "
            value={commentOne}
            onChange={handleCommentChange}
          ></Form.Control>
          <button className="bottoneDentroForm rounded-pill border-0">
            <EmojiSmile />
          </button> */}
          <InputGroup className="mb-1">
            <Form.Control
              ref={inputRef}
              placeholder="Aggiungi un commento..."
              aria-label="text"
              id="inputFieldInForm"
              aria-describedby="basic-addon2"
              // className="FormControl rounded-5  border-secondary w-100 smaller  "
              className="border-secondary rounded-start-5"
              value={commentOne}
              onChange={handleCommentChange}
            />
            <InputGroup.Text
              id="basic-addon2"
              className="border-secondary rounded-end-5"
            >
              <div className="d-flex">
                <EmojiSmile className="mx-1 pointer" />
                <Image className="mx-1 pointer" />
              </div>
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <button
          variant="primary"
          onClick={() => {
            addThisComment();
            clearInput();
          }}
          className="bg-primary border border-0 rounded-4 mx-2 my-1 px-3 py-1 text-white fs-7 fw-bold"
        >
          Pubblica
        </button>
      </div>
    </section>
  );
};

export default AddComment;
