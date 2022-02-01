import React from "react";
import { updateTransaction, deleteTransaction } from "../store/actions/transaction-actions";
import { connect } from "react-redux";
const TransactionItem = props => {
 
   return(
      <div style={{display: 'flex', justifyContent: 'space-evenly', fontSize: '15px', alignItems: 'center'}}>
         <p>Account number: {props.transaction.accountNumber}</p>
         <p>FDC: {props.transaction.fsc}</p>
         <p>Holder name: {props.transaction.holderName}</p>
         <p>Amount: {props.transaction.amount}</p>
         <button style={{height: 30}} onClick={() => props.editTransaction(props.transaction)}>EDIT</button>
         <button style={{height: 30}} onClick={() => props.deleteTransaction(props.transaction)}>DELETE</button>
      </div>
   )
}
const mapDispatchToProps = (dispatch) => {
   return {
      editTransaction: (val)=> dispatch(updateTransaction(val)),
      deleteTransaction: (val)=> dispatch(deleteTransaction(val)),
   }
}
export default connect(null, mapDispatchToProps)(TransactionItem);