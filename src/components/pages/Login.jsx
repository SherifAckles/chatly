import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./register.css";

function Login() {
  return (
    <main className="main-container">
      <span className="logo d-flex justify-content-center">
        Chatl <span className="y">y</span>
      </span>
      <Form>
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
          <Button className="d-grid mt-2 col-6 mx-auto" size="md">
            Sign in
          </Button>
        </div>
      </Form>
      <p className="d-flex justify-content-center m-4">
        Don't have Chatly account? Register
      </p>
    </main>
  );
}

export default Login;
