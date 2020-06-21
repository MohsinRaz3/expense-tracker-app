import React, {useState} from 'react';

export const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();





    return (
        <div>
            <h4> Add New Transaction</h4>
            <form>
                <div className="form-control">

                   <label htmlFor="description">
                       Description <br/>

                       <input type="text"
                       id = "description"
                       placeholder="Detail of Transactions"

                       value={description}
                       onChange={(e) => setDescription (e.target.value)} />

                   </label>
                 </div>

                   <br/>
                 <div className="form-control">

                    <label htmlFor="transactionamount">
                       Enter your amount <br/>

                       <input type="number"
                       id = "transactionamount"
                       placeholder="Enter your amount"
                       
                       value={transactionAmount}
                       onChange={(e) => setTransactionAmount(e.target.value)} />

                    </label>

                   <br/>

                   <input type="submit"/>
                   < br/>

                   <label className="copyright">
                       Copyright &copy; 2020, Mohsin Raz All Rights Reserved.
                   </label>

                </div>

                



            </form>
            
        </div>
    )
}
