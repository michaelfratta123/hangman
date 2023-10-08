import React from "react";

// initiate a component named Status for the status of the game
const Status = ({ status }) => {
  // render the component; pass the status as props
  return (
    <div className="mt-3">
      <h4>{status}</h4>
    </div>
  );
};

export default Status;
