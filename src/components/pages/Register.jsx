import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./register.css";
function FormGroupExample() {
  return (
    <main className="main-container">
      <Form>
        <Form.Group
          className="mb-3 container-form-group"
          controlId="formGroupEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
            type="email"
            placeholder="Enter email" required
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
            placeholder="Password" required
          />
        </Form.Group>

        <Form.Label>Profile picture</Form.Label>

        <div>
          <Form.Control className="" type="file" variant="light" size="md" />
        </div>

        <div>
          <Button className="d-grid mt-5 col-6 mx-auto signin" size="md">
            Sign in
          </Button>
        </div>
      </Form>
    </main>
  );
}

export default FormGroupExample;
