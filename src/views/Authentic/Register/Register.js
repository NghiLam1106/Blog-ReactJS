import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{ width: "30%" }}>
            <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                    <button type="button" className="btn btn-primary rounded-circle mx-1">
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button type="button" className="btn btn-primary rounded-circle mx-1">
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                    <hr className="text-black-50 w-50" />
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    <hr className="text-black-50 w-50" />
                </div>
                
                {/* Username input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username" className="form-control form-control-lg" placeholder="Enter a valid username"/>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a valid email address"/>
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password"/>
                </div>

                {/* Repeat Password input */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="repeat-password">
                        Repeat password
                    </label>
                    <input type="password" id="repeat-password" className="form-control form-control-lg" placeholder="Enter repeat password"/>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                        Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                        Have an account?{" "}
                        <Link className="link-danger" to="/Login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Register;
