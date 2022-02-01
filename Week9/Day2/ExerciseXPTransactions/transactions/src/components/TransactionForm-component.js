import React, { useState } from "react";
import TransactionList from "./TransactionList-component";
import { insertTransaction } from "../store/actions/transaction-actions";
import { connect } from "react-redux";

const TransactionFrom = props => {
   initialInputs(props);
   const submitHandler = e => {
      e.preventDefault();
      props.addTransaction({
         accountNumber: e.target[0].value,
         fsc: e.target[1].value,
         holderName: e.target[2].value,
         amount: e.target[3].value,
         id: props.currentTransaction?.id || new Date().getTime()
      })
      e.target.reset();
   }
   return(
      <div>
         <h1>Financial Transactions:</h1>
         <form onSubmit={(e)=>submitHandler(e)}>
            <input type='text' name='accountNumber' placeholder="Account Number" required/>
            <input type='text' name='fsc' placeholder="FSC" required/>
            <input type='text' name='holderName' placeholder="A/C Holder Name" required/>
            <input type='text' name='amount' placeholder="Amount" required/>
            <input type='submit' value="Submit"/>
         </form>
         <TransactionList/>
      </div>
   )
}

const initialInputs = (props) => {
   if(props.currentTransaction){
      document.querySelector('form')[0].value = props.currentTransaction.accountNumber;
      document.querySelector('form')[1].value = props.currentTransaction.fsc;
      document.querySelector('form')[2].value = props.currentTransaction.holderName;
      document.querySelector('form')[3].value = props.currentTransaction.amount;
   } 
}
const mapStateToProps = state => {
   return {
      currentTransaction: state.transactions.currentTransaction
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addTransaction: (val)=> dispatch(insertTransaction(val))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionFrom);