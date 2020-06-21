import React from 'react';

export const TransactionHistory = () => {

    return (
        <div>
            <h4> Transaction History</h4>
            <ul className="list">
                <li className="plus"> Project 1
                    <span> $ 1,000.0 </span>
                </li>

                <li className="minus">
                    Power Bill 
                    <span>$ - 200.0 </span>
                </li>
            </ul>
        </div>
    )
}
