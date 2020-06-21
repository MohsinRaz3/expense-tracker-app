import React, {createContext, useReducer} from 'react';

//import AppReducer
import AppReducer from './AppReducer'

//Create the initial State

const initialState ={
    transactions:[
        {id: 1, description:"salary", transactionAmount: 70000},
        {id: 2, description:"Gas Bill", transactionAmount: -200},
        {id: 3, description:"Bonus", transactionAmount: 3000},
        {id: 4, description:"Fule expense", transactionAmount: -2400}
    ]
}
// create a Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider for global Context
export const GlobalProvider = ({children})=> {

    const [state] = useReducer(AppReducer, initialState)


    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }

            }>
        
        {children}
        </GlobalContext.Provider>
    )
}
