import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const InputFieldForPost = () => {
  const clearInput = () => {
    setInput("");
  };

  const [input, setInput] = useState("");
  const fetchPost = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ text: input }),
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
          className="bg-transparent rounded-0 border-0 p-3"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
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
