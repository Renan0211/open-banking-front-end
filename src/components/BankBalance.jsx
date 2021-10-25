import React from 'react'

function BankBalance(props) {
  return (
    <tr>
      <td>{props.bank_id}</td>
      <td>{props.balance}</td>
    </tr>
  )
}

export default BankBalance
