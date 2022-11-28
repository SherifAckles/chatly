import Form from "react-bootstrap/Form";
import "./register.css";
import { Button } from 'react-bootstrap';

function FormGroupExample() {
  return (
    <Form>
      <main className="container main-container m-4 p-5 w-50 mx-auto bg-dark br-2rem">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div>
        <Button variant="light" size="md">Sign in</Button> 
        </div>
      </main>
    </Form>
  );
}

export default FormGroupExample;
