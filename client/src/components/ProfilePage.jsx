import React from 'react';
<<<<<<< HEAD

import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';


=======
import TransactionHistory from './TransactionHistory.jsx';
>>>>>>> Just cleared up previous conflicts
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        PROFILE PAGE
<<<<<<< HEAD
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>

=======
        <TransactionHistory transactionHist={this.props.transactionHist}/>
>>>>>>> Just cleared up previous conflicts
      </div>
    );
  }
}

export default ProfilePage;
