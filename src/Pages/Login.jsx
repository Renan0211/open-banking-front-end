import axios from 'axios'
import React, { useState } from 'react'
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router';

export default function Login (){
  const [userData, setUserData] = useState({});
  const [redirect, setRedirect] = useState('');

  const fetchLogin = async () => {
    await axios({
      method: 'POST',
      baseURL: 'http://localhost:3001/',
      url: '/login',
      data: userData,
    }).then(res => {
      localStorage.setItem('token', res.data.token);
      setRedirect('user/balance')
    }).catch(e => alert(e.response.data.message));
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      {
        redirect !== '' ? <Redirect to={`/${redirect}`}/> : ''
      }
      <h1 className="text-light text-center mb-5">Login</h1>
      <Container className="">
        <Form className="align-middle d-flex flex-column align-items-center">
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3 w-50"
          >
            <Form.Control type="email" placeholder="name@example.com" onChange={i => setUserData({...userData, email: i.target.value})}/>
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="w-50">
            <Form.Control type="password" placeholder="Password" onChange={i => setUserData({...userData, password: i.target.value})}/>
          </FloatingLabel>
          <Button className="my-2 mx-auto" onClick={fetchLogin}>Login</Button>
        </Form>
      </Container>
    </div>
  )
}
