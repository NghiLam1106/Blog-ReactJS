import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <ul className="nav fixed-top justify-content-end" style={{ background: "#f8f9fa", height: "60px" }}>
        <li className="nav-item dropdown me-3" style={{ marginTop: "10px" }}>
          <button className="btn btn-secondary" style={{ background: "#f8f9fa", border: "1px solid #f8f9fa", color: "black" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faUser} />
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Login">Đăng nhập</Link></li>
            <li><Link className="dropdown-item" to="/Register">Đăng kí</Link></li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Header;
