import React, { useContext, useState } from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHashtag,
  faLock,
  faEnvelope,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import "./form.css";
import { Context } from "../..";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const [userId, setUserID] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState();

  
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
  useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/users/user/register",
          {
            userId,
            bankName,
            bankAccountNumber,
            password,
            usertype,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        toast.success(data.message, { duration: 1500 });
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);

        if (error.response) {
          const { data } = error.response;
          toast.error(data.message, { duration: 1500 });
        }
        setLoading(false);
      }
    
  };

  if (isAuthenticated) {
    return <Navigate to={"/user/home"} />;
  }

  return (
    <div>
      <Navbar />
      <div className="reg">
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "Helvetica Neue",
          }}
        >
          Sign Up
        </h2>
        <div className="form-container">
          <form
            className="card"
            style={{ background: "#eeeeee" }}
            onSubmit={submitHandler}
          >
            <div className="form my-4" style={{ textAlign: "center" }}>
              <div className="text-center my-2">
                &nbsp;&nbsp;
                <input
                  type="string"
                  name="firstname"
                  value={userId}
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                  placeholder="User ID"
                  style={{ fontFamily: "Helvetica Neue" }}
                  spellcheck="false"
                  required
                />
              </div>
              <div className="text-center my-2">
                &nbsp;&nbsp;
                <input
                  type="text"
                  name="lastname"
                  value={bankName}
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                  placeholder="Bank Name"
                  style={{ fontFamily: "Helvetica Neue" }}
                  spellcheck="false"
                  required
                />
              </div>
              <div className="text-center my-2">
                &nbsp;&nbsp;
                <input
                  type="text"
                  name="username"
                  value={bankAccountNumber}
                  onChange={(e) => {
                    setBankAccountNumber(e.target.value);
                  }}
                  placeholder="Bank Account Number"
                  style={{ fontFamily: "Helvetica Neue" }}
                  spellcheck="false"
                  required
                />
                <br />
              </div>

              <div className="text-center my-2">
                &nbsp;&nbsp;
                <input
                  type="password"
                  name="password"
                  title="password must contains atleast 8 character"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  style={{ fontFamily: "Helvetica Neue" }}
                  spellcheck="false"
                  required
                />
                <br />
              </div>
              <div className="text-center my-2">
                
                &nbsp;&nbsp;
                <input
                  
                  value={usertype}
                  onChange={(e) => {
                    setUsertype(e.target.value);
                  }}
                  placeholder="Boss = 1 or Employee = 0"
                  style={{ fontFamily: "Helvetica Neue" }}
                  spellcheck="false"
                  required
                />
                <br />
              </div>
              
              <div className="text-center my-2">
                <button
                  disabled={loading}
                  id="click"
                  type="submit"
                  style={{ border: "none", fontFamily: "Helvetica Neue" }}
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center my-2">
                Already have an account?{" "}
                <Link to="/login" style={{ fontFamily: "Helvetica Neue" }}>
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
