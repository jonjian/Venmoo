import React from 'react';
<<<<<<< HEAD
import TransactionHistory from './TransactionHistory.jsx';

=======
import Form from './Form.jsx'
>>>>>>> Creates the form component with fields to, amount, and message
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
        PROFILE PAGE
        <TransactionHistory transactionHist={this.props.transactionHist}/>
=======
      PROFILE PAGE
      <Form />
>>>>>>> Creates the form component with fields to, amount, and message
      </div>
    );
  }
}

export default ProfilePage;
