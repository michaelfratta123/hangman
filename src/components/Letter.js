import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

// initiate a functional component named Letter to handle rendering the guessed letters
const Letter = ({ letter }) => {
  // render the component; pass the letter as props
  return (
    // equally space the tiles/cards, and size them
    <div className="col-1 mb-2 ms-4 d-flex justify-content-center align-items-center">
      <Card
        bg="dark"
        style={{ width: "3rem", height: "3rem", textAlign: "center" }}
      >
        {/* ensure the letter appears right in the centre of the card */}
        <Card.Body
          className="d-flex justify-content-center align-items-center p-0 mb-1 text-light"
          style={{ fontSize: "x-large", width: "100%", height: "100%" }}
        >
          {letter}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Letter;
