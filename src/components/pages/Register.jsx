import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./register.css";
function FormGroupExample() {
  return (
    <main className="main-container">
      <span className="logo d-flex justify-content-center">Chatly</span>
      <Form>
        <span className="title d-flex justify-content-center m-2">
          Register
        </span>
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

        <Form.Label>Profile picture</Form.Label>

        <div>
          <Form.Control className="" type="file" variant="light" size="md" />
        </div>

        <div>
          <Button className="d-grid mt-4 col-6 mx-auto" size="md">
            Sign up
          </Button>
        </div>
      </Form>
      <p className="d-flex justify-content-center m-4">
        Already have Chatly account? login
      </p>
    </main>
  );
}

export default FormGroupExample;
