import React from "react";
import Button from "react-bootstrap/Button";

// initiate a functional component named Help for the help button
const Help = ({ handleHelp }) => {
  // render the component - pass handleHelp props
  return (
    <div>
      <Button className="mb-3" variant="dark" onClick={handleHelp}>
        Help
      </Button>
    </div>
  );
};

export default Help;
