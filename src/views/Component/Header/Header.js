import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <ul className="nav" style={{height: "50px"}}>
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/category" className="nav-link">Category</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
