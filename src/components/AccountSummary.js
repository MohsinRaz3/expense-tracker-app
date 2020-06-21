import React from 'react';

export const AccountSummary = () => {
    return (
        <div className="inc-exp-container ">
            <div>
                <h2> Income</h2>
                <p className="money plus"> $ 0.00</p>
            </div>

            <div> 
                <h2> Expense </h2>
                <p className="money minus">$ 0.00</p>
            </div>
        </div>
    )
}
