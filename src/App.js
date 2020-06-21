import React from 'react';
import './App.css'

//import components
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'

function App() {

  return (

    <div className="container">
     
       <Header  />
       

      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />

    </div>
  );
}

export default App;
