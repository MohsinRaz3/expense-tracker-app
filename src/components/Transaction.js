import React from 'react'

export const Transaction = () => {
    return (
        <div>
            <li className="plus"> {Transaction.description}
                <span> {Transaction.transactionAmount} </span>
                <button className="delete-btn">X</button>
            </li>
        </div>
    )
}
