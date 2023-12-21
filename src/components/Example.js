import React from "react";

const Example = (props) => {
  const random = Math.floor(Math.random() * 10) + 1;
  return (
    <div className="heading">
      <h1>{random}</h1>
      <p>{random >= 5 ? "Over 5 " : "Under 5"}</p>
      <h2>
        The Value of the toggleBoolean props is :{" "}
        {props.toggleBoolean.toString()}
      </h2>
      {/*  Expressions as props */}
      <p>
        The value of the math prop is : <em>{props.math}</em>
      </p>
      <p>
        The value of the string prop is : <em>{props.str}</em>{" "}
      </p>
    </div>
  );
};

export default Example;
