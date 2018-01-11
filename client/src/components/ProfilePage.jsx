import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import TransactionHistory from './TransactionHistory.jsx';

=======
import Form from './Form.jsx'
>>>>>>> Creates the form component with fields to, amount, and message
=======
import TransactionHistory from './TransactionHistory.jsx';

>>>>>>> Something is happening
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

  }

  // Displaying the username is propably unnecessary at the top of the profile page,
  // but we'll probably want it displayed somewhere.
  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        PROFILE PAGE
        <TransactionHistory transactionHist={this.props.transactionHist}/>
=======
      PROFILE PAGE
      <Form />
>>>>>>> Creates the form component with fields to, amount, and message
=======
        PROFILE PAGE
        <TransactionHistory transactionHist={this.props.transactionHist}/>
>>>>>>> Something is happening
      </div>
    );
  }
}

export default ProfilePage;
