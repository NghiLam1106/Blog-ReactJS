import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100" style={{ width: "30%" }}>
                <form>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                            Email address
                        </label>
                        <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address"/>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4">
                            Password
                        </label>
                        <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password"/>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        {/* Checkbox */}
                        <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" id="form2Example3"/>
                            <label className="form-check-label" htmlFor="form2Example3">
                                Remember me
                            </label>
                        </div>
                        <a href="#!" className="text-body">
                            Forgot password?
                        </a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                            Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <Link to="/Register" className="link-danger">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}

export default Login;
