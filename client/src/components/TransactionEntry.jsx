import React from 'react';

// const TransactionEntry = props => (
//   <div>
//     Entry
//   </div>
// );

class TransactionEntry extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        Entry
      </div>
    )
  }
}

export default TransactionEntry;