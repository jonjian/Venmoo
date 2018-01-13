import React from 'react';
import PendingEntry from './PendingEntry.jsx';


const PendingTransactions = props => (
  <ol className="container">
    {props.transactionHist
      .filter(entry => (entry.status === 'pending' & entry.sender_id === props.user.id))
      .map(entry => {
        console.log(entry)
      return <PendingEntry entry={entry} />
    })}
  </ol>
);

export default PendingTransactions;
