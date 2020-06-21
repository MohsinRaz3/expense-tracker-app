import React from 'react';
import './App.css'

//import Global Provider
import {GlobalProvider} from './context/globalState';

//import components
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'

function App() {

  return (

    <GlobalProvider>

    <div className="container">
     
       <Header  />
       

      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />

    </div>

    </GlobalProvider>
  );
}

export default App;
