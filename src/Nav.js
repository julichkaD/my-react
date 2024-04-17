import React from "react";
import "./index.css"

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/another-page">Featured</a>
        </li>
        <li>
          <a href="/another-page">Jeans</a>
        </li>
        <li>
          <a href="/another-page">Pants</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
