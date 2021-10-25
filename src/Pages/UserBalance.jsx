import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import BankBalance from '../components/BankBalance';
require('dotenv').config();

function UserBalance() {
  const [userBalances, setUserBalances] = useState([]);
  const [redirect, setRedirect] = useState('');
  useEffect(() => {
    async function fetchBalances () {
      await axios({
        method: 'GET',
        baseURL: 'http://localhost:3001/',
        url: '/user/balance',
        headers: {authorization: localStorage.getItem('token')},
      }).then(res => {
        setUserBalances(res.data);
      }).catch(e => {
        if(e.response.status === 401) localStorage.removeItem('token');
        alert(e.response.data.message);
        setRedirect('/');
      });
    }
    fetchBalances();
  }, []);
  return (
    <div>
      <h1 className="text-light text-center m-3">Your balances:</h1>
      {
        redirect !== '' ? <Redirect to={`${redirect}`}/> : ''
      }
      <Table striped bordered hover className="table-light w-50 mx-auto">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {userBalances.map(balance => <BankBalance bank_id={balance.bank_id} balance={balance.balance}/>)}
        </tbody>
      </Table>
    </div>
  )
}

export default UserBalance
