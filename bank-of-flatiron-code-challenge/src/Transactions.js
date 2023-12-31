import React, { useState } from 'react';
function Transactions({transactions}) {
    return(
        <div>
            <h1>The Bank Of Flatiron</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key = {transaction.id}>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Transactions;