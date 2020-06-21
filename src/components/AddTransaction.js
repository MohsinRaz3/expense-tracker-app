import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h4> Add New Transaction</h4>
            <form>
                <div className="form-control">

                   <label htmlFor="description">
                       Description <br/>

                       <input type="text"
                       id = "description"
                       placeholder="Detail of Transactions"/>
                   </label>
                 </div>

                   <br/>
                 <div className="form-control">

                    <label htmlFor="transactionamount">
                       Enter your amount <br/>

                       <input type="number"
                       id = "transactionamount"
                       value="Add Transaction"
                       placeholder="Enter your amount"/>

                    </label>

                   <br/>

                   <input type="submit"
                        />

                </div>

                



            </form>
            
        </div>
    )
}
