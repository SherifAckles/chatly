import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <Form>
        <main className='container main-container'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </main>
    </Form>
  );
}

export default FormGroupExample;