import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';


=======
=======
import Form from './Form.jsx'
>>>>>>> Adds css stylesheet and adds Form component
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
<<<<<<< HEAD
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>

=======
=======
        <Form />
>>>>>>> Adds css stylesheet and adds Form component
        <TransactionHistory transactionHist={this.props.transactionHist}/>
>>>>>>> Just cleared up previous conflicts
      </div>
    );
  }
}

export default ProfilePage;
