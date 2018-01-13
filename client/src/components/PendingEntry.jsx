import React from 'react';
import axios from 'axios';

const PendingEntry = (props) => {
  const id = props.entry.transaction_id;
  const accept = () => axios.post(`/transaction/accept/${id}-approved`);
  const decline = () => axios.post(`/transaction/accept/${id}-declined`);
  return (
    <li className="pendingItem">
      {props.entry.receiver_name} is requesting {props.entry.amount}
      <button onClick={accept}>agree to pay</button>
      <button onClick={decline}>decline request</button>
    </li>
  );
};


export default PendingEntry;
