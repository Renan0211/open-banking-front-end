import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import Transaction from '../components/Transaction';

function UserTransactions() {
  const [userTransactions, setUserTransactions] = useState([]);
  const [redirect, setRedirect] = useState('');
  useEffect(() => {
    async function fetchTransactions () {
      await axios({
        method: 'GET',
        baseURL: 'http://localhost:3001/',
        url: '/user/bank-statement',
        headers: {authorization: localStorage.getItem('token')},
      }).then(res => {
        setUserTransactions(res.data);
        console.log(res.data);
      }).catch(e => {
        if(e.response.status === 401) localStorage.removeItem('token');
        alert(e.response.data.message);
        setRedirect('/');
      });
    }
    fetchTransactions();
  }, []);
  return (
    <div>
      <h1 className="text-light text-center m-3">Your transactions:</h1>
      {
        redirect !== '' ? <Redirect to={`${redirect}`}/> : ''
      }
      <Table striped bordered hover className="table-light w-50 mx-auto">
        <thead>
          <tr>
            <th>Sending Account</th>
            <th>Receiving Account</th>
            <th>Value</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody>
          {userTransactions.map(transaction => <Transaction sendingAccountId={transaction.sendingAccountId} receivingAccountId={transaction.receivingAccountId} value={transaction.value} transactionType={transaction.transactionType}/>)}
        </tbody>
      </Table>
    </div>
  )
}


export default UserTransactions
