import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// initiate a component named Input to handle the user inputs
const Input = ({ handleInput }) => {
  // rendr thee component - pass handleInput as props
  return (
    // ensure that everything is centred
    <div className="d-flex justify-content-center align-items-center">
      {/* center the form and have the button appear alongside it */}
      <Form onSubmit={handleInput} className="d-flex">
        <Form.Control
          type="text"
          maxLength="1"
          placeholder="Input a letter..."
          style={{ width: "8rem" }}
        />
        <Button variant="dark" type="submit">
          Go
        </Button>
      </Form>
    </div>
  );
};

export default Input;
