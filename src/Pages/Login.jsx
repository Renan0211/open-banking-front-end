import React, { Component } from 'react'
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <h1 className="text-light text-center mb-5">Login</h1>
        <Container className="">
          <Form className="align-middle d-flex flex-column align-items-center">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 w-50"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="w-50">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button className="my-2 mx-auto">Login</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
