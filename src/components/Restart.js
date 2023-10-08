import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// initiate a component named Restart for the restart button
const Restart = ({ handleRestart }) => {
  // render the component; pass handleRestart as props
  return (
    <div className="m-3">
      <Button variant="dark" onClick={handleRestart}>
        Restart Game
      </Button>
    </div>
  );
};

export default Restart;
