import React from 'react'

function Transaction(props) {
  return (
    <tr>
      <td>{props.sendingAccountId}</td>
      <td>{props.receivingAccountId}</td>
      <td>{props.value}</td>
      <td>{props.transactionType}</td>
    </tr>
  )
}

export default Transaction
