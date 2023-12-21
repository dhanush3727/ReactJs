import React from "react";

const Bag = (props) => {
  const bag = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0",
  };
  //  The above think is one of add a style in react
  return <div style={bag}>{props.children}</div>;
};

export default Bag;
