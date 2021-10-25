import React, { Component } from 'react'
import { Container, FloatingLabel, Form, Button, InputGroup } from 'react-bootstrap'

export default class Register extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <h1 className="text-light text-center mb-5"> Register </h1>
        <Container className="">
          <Form className="align-middle d-flex flex-column align-items-center">
            <h3 className="text-light">Your Address Info</h3>
            <InputGroup id="address-info" className="align-middle d-flex flex-column align-items-center">
              <FloatingLabel
                controlId="address-country"
                label="Country"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="Brasil" />
              </FloatingLabel>
              <FloatingLabel
                controlId="address-state"
                label="State"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="São Paulo" />
              </FloatingLabel>
              <FloatingLabel
                controlId="address-city"
                label="City"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="São Paulo" />
              </FloatingLabel>
              <FloatingLabel
                controlId="address-street"
                label="Street"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="Av Paulista" />
              </FloatingLabel>
              <FloatingLabel
                controlId="address-number"
                label="Number"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="123" />
              </FloatingLabel>
            </InputGroup>
            <h3 className="text-light"> Your info </h3>
            <InputGroup id="address-info" className="align-middle d-flex flex-column align-items-center">
            <FloatingLabel
                controlId="user-first-name"
                label="First Name"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="Jane" />
              </FloatingLabel>
              <FloatingLabel
                controlId="user-last-name"
                label="Last Name"
                className="mb-3 w-50"
              >
                <Form.Control type="text" placeholder="Doe" />
              </FloatingLabel>
              <FloatingLabel
                controlId="user-email"
                label="Email address"
                className="mb-3 w-50"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="user-password" label="Password" className="w-50">
                <Form.Control type="password" placeholder="Password123" />
              </FloatingLabel>
            </InputGroup>
            <Button className="my-2 mx-auto">Register</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
