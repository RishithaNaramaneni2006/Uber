import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const DriverLogin = () => {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Driver Login</h2>
      <Form>
        <Form.Group controlId="driverEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="driverPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" className="mt-4" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default DriverLogin;
