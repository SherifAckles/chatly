import Form from "react-bootstrap/Form";
import "./register.css";
import { Button } from "react-bootstrap";

function FormGroupExample() {
  return (
    <Form>
      <main className="container main-container  p-5 w-50  bg-dark br-2rem">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="email" type="email" placeholder="Enter email"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="email" type="password" placeholder="Password"  />
        </Form.Group>
        
        <Form.Label>Profile picture</Form.Label>
        
        <div>
        <Form.Control className="" type="file" variant="light" size="md" />
            
          
        </div>
        
        <div>
          <Button className="mt-4" variant="light" size="md" >
            Sign in
          </Button>
        </div>
      </main>
    </Form>
  );
}

export default FormGroupExample;
