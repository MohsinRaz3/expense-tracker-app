import React, {useContext} from 'react';

//import Global Context
import {GlobalContext} from '../context/globalState';

//import Transaction
import { Transaction } from './Transaction';



export const TransactionHistory = () => {

    //useContext
    const { transactions } = useContext(GlobalContext)

    return (
        <div>
            <h4> Transaction History</h4>
            <ul className="list">

                {transactions.map(transaction => (
                <Transaction key= {transaction.id} transaction={transaction}/>
                )

                )}
                

                <li className="minus">
                    Power Bill 
                    <span>$ - 200.0 </span>
                    <button className="delete-btn">X</button>

                </li>
            </ul>
        </div>
    )
}
