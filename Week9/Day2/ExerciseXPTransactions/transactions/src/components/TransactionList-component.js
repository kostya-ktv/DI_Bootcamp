import React from "react";
import TransactionItem from "./TransactionItem-component";
import { connect } from "react-redux";
const TransactionList = props => {
   localStorage.setItem('transitions', JSON.stringify(props.transactions))
   return(
      <div>
         <h1>
            List!
            {props.transactions.length > 0 && props.transactions.map(el => {
               return <TransactionItem key={el.id}transaction={el}/>
            })}
         
         </h1>
      </div>
   )
}
const mapStateToProps = state => {
   return {
      transactions: state.transactions.transactionsList
   }
}

export default connect(mapStateToProps)(TransactionList);