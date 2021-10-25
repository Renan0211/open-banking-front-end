import axios from 'axios';
import React, { useState } from 'react'
import { Container, FloatingLabel, Form, Button, InputGroup } from 'react-bootstrap'
import { Redirect } from 'react-router';

function Register () {
  const [newUserData, setNewUserData] = useState({});
  const [redirect, setRedirect] = useState('');
  const fetchRegister = async () => {
    await axios({
      method: 'POST',
      baseURL: 'http://localhost:3001/',
      url: '/user',
      data: newUserData,
    }).then(res => {
      localStorage.setItem('token', res.data.token);
      setRedirect('user/balance')
    }).catch(e => alert(e.response.data.message));
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-light text-center mb-5"> Register </h1>
      {
        redirect !== '' ? <Redirect to={`/${redirect}`}/> : ''
      }
      <Container className="">
        <Form className="align-middle d-flex flex-column align-items-center">
          <h3 className="text-light">Your Address Info</h3>
          <InputGroup id="address-info" className="align-middle d-flex flex-column align-items-center">
            <FloatingLabel
              controlId="address-country"
              label="Country"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="Brasil" onChange={i => setNewUserData({...newUserData, addressInfo: {...newUserData.addressInfo, country: i.target.value}})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="address-state"
              label="State"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="São Paulo" onChange={i => setNewUserData({...newUserData, addressInfo: {...newUserData.addressInfo, state: i.target.value}})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="address-city"
              label="City"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="São Paulo" onChange={i => setNewUserData({...newUserData, addressInfo: {...newUserData.addressInfo, city: i.target.value}})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="address-street"
              label="Street"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="Av Paulista" onChange={i => setNewUserData({...newUserData, addressInfo: {...newUserData.addressInfo, street: i.target.value}})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="address-number"
              label="Number"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="123" onChange={i => setNewUserData({...newUserData, addressInfo: {...newUserData.addressInfo, number: i.target.value}})}/>
            </FloatingLabel>
          </InputGroup>
          <h3 className="text-light"> Your info </h3>
          <InputGroup id="address-info" className="align-middle d-flex flex-column align-items-center">
          <FloatingLabel
              controlId="user-first-name"
              label="First Name"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="Jane" onChange={i => setNewUserData({...newUserData, firstName: i.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="user-last-name"
              label="Last Name"
              className="mb-3 w-50"
            >
              <Form.Control type="text" placeholder="Doe" onChange={i => setNewUserData({...newUserData, lastName: i.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="user-email"
              label="Email address"
              className="mb-3 w-50"
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={i => setNewUserData({...newUserData, email: i.target.value})}/>
            </FloatingLabel>
            <FloatingLabel controlId="user-password" label="Password" className="w-50">
              <Form.Control type="password" placeholder="Password123" onChange={i => setNewUserData({...newUserData, password: i.target.value})}/>
            </FloatingLabel>
          </InputGroup>
          <Button className="my-2 mx-auto" onClick={fetchRegister}>Register</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
