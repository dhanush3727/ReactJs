import React from "react";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <h1>{props.title}</h1>
      {/*This is a get arguments through using props */}
      <ul>
        <li>{props.first}</li>
        <li>{props.second}</li>
        <li>{props.third}</li>
        <li>{props.fourth}</li>
      </ul>
    </nav>
  );
};

export default Nav;
