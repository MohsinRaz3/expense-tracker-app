import React, {createContext, useReducer} from 'react';

//import AppReducer
import AppReducer from './AppReducer'

//Create the initial State

const initialState ={
    transactions:[]

}
// create a Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider for global Context
export const GlobalProvider = ({children})=> {

    const [state,dispatch] = useReducer(AppReducer, initialState)

        // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }




    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }

            }>
        
        {children}
        </GlobalContext.Provider>
    );
}
