import React from 'react';
import PendingEntry from './PendingEntry.jsx';


const PendingTransactions = props => (
  <ol className="container">
    {props.transactionHist
      .filter(entry => (entry.status === 'pending' && entry.sender_id === props.user.id))
      .sort((a, b) => a.created_timestamp < b.created_timestamp ? 1 : -1 )
      .map(entry => <PendingEntry entry={entry} />)
  }
  </ol>
);

export default PendingTransactions;
