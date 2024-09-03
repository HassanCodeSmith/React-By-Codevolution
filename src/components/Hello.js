import React from "react";

// With JSX (JavaScript XML)
/*
const Hello = () => {
  return (
    <div>
      <h1>Hassan Murtaza</h1>
    </div>
  );
};
*/

// Without JSX (JavaScript XML)
const Hello = () => {
  return React.createElement(
    "div",
    { id: "parent", className: "dummyDiv" },
    React.createElement("h1", null, "Hassan Murtaza")
  );
};

export default Hello;
