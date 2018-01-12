import React from 'react';
import TransactionEntry from './TransactionEntry.jsx';

const TransactionHistory = (props) => {
  return (
    <div>
      Transaction History:
      {props.transactionHist.map(entry => (
        <div>
          <TransactionEntry
            transaction={entry}
            key={entry.transaction_id}
            user={props.user}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
