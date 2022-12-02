import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./register.css";
import { auth } from "../../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <main className="main-container">
      <span className="logo d-flex justify-content-center">
        Chatl <span className="y">y</span>
      </span>
      <Form onSubmit={handleSubmit}>
        <span className="title d-flex justify-content-center m-2">Login</span>
        <Form.Group
          className="mb-3 container-form-group"
          controlId="formGroupEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 container-form-group"
          controlId="formGroupPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="email"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div>
          <Button type="submit" className="d-grid mt-2 col-6 mx-auto" size="md">
            Sign in
          </Button>
          {err && <span>Something went wrong</span>}
        </div>
      </Form>
      <p className="d-flex justify-content-center m-4">
        Don't have Chatly account? <Link to="/register">Register</Link>
      </p>
    </main>
  );
}

export default Login;
