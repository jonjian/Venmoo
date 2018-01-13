import React from 'react';
import axios from 'axios';

// const PendingEntry = (props) => {
//   const id = props.entry.transaction_id;
//   const accept = () => axios.post(`/transaction/accept/${id}-approved`);
//   const decline = () => axios.post(`/transaction/accept/${id}-declined`);
//   return (
//     <li className="pendingItem">
//       {props.entry.receiver_name} is requesting {props.entry.amount}
//       <button onClick={accept}>agree to pay</button>
//       <button onClick={decline}>decline request</button>
//     </li>
//   );
// };


class PendingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: props.entry,
      isVisible: true,
    };
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    const id = this.state.entry.transaction_id;
    const accept = () => {
      axios.post(`/transaction/accept/${id}-approved`);
      this.hide();
    };
    const decline = () => {
      axios.post(`/transaction/accept/${id}-declined`);
      this.hide();
    };
    return (
      this.state.isVisible === true ?
        <li className="pendingItem">
          {this.state.entry.receiver_name} is requesting {this.state.entry.amount}
          <button onClick={accept}>agree to pay</button>
          <button onClick={decline}>decline request</button>
        </li>
        :
        null
    );
  }
}

export default PendingEntry;
