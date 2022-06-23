import React from "react";
import { Form } from "react-bootstrap";
import history from "../const";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const navigate = useNavigate();
  const initialState = {
    emptyEmail: "",
    emptyPassword: "",
  };
  const [Values, setValues] = useState(initialState);

  const SubmitHandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const SubmitMatch = (e) => {
    e.preventDefault();
    const TableLocalData = JSON.parse(localStorage.getItem("NewData"));
    const NewTableLocalData = TableLocalData?.filter(
      (f) =>
        f.email === Values.emptyEmail && f.password === Values.emptyPassword
    )

    if (NewTableLocalData?.length == 0) {
      toast.error("Failed To Login");
    } else {
      localStorage.setItem("token" , "Token")
      toast.success("Login Successful");
      navigate("/table"); 
    }
  };
  return (
    <>
      <div className="container">
        <Form className="my-5">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={SubmitHandle}
              value={Values.emptyEmail}
              name="emptyEmail"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={SubmitHandle}
              value={Values.emptyPassword}
              name="emptyPassword"
            />
          </Form.Group>

          <button
            className="btn btn-primary"
            onClick={(e) => {
              SubmitMatch(e);
            }}
          >
            Submit
          </button>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
}
export default Login;
