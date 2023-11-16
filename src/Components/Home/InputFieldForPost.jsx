import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const InputFieldForPost = () => {
  const clearInput = () => {
    setInput("");
  };

  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const fetchPost = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ3NWM1NWU3ZTAwMThmODNjMGMiLCJpYXQiOjE2OTk4NjgwMjEsImV4cCI6MTcwMTA3NzYyMX0.MaefAedXN33dNfhoWKrtbaRpMDXC487KQz_7broOWxU",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ text: input, image: image }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
        } else {
          throw new Error("Error while posting ");
        }
      })
      .catch((err) => console.log("Error: ", err));
  };
  return (
    <Form className="shadow pt-3">
      <Form.Group className="mb-3 d-flex flex-column">
        <Form.Control
          type="text"
          placeholder="Share what you're thinking with your friends"
          className="rounded-0 border-0 p-3"
          id="inputFieldInForm"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Form.Control
          type="text"
          placeholder="Copy your Image Url here"
          className="rounded-0 border-0 p-3"
          id="inputFileInForm"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <div className="d-flex justify-content-end px-2 align-items-center my-1">
          <Button
            id="cancelBtn"
            className="rounded-1 py-0 px-3"
            onClick={() => clearInput()}
          >
            Cancel
          </Button>
          <Button
            id="addBtn"
            className="rounded-1 py-0 px-3 ms-1 "
            onClick={() => {
              fetchPost();
              clearInput();
            }}
          >
            Post
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};
export default InputFieldForPost;
