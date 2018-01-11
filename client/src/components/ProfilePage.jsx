import React from 'react';
<<<<<<< HEAD

import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';

=======
import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';
>>>>>>> 31853f74316a2536dc7cc5a2203426426a077e7a
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

  }

  // Displaying the username is propably unnecessary at the top of the profile page,
  // but we'll probably want it displayed somewhere.
  render() {
    return (
      <div>
        PROFILE PAGE
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>
<<<<<<< HEAD

=======
>>>>>>> 31853f74316a2536dc7cc5a2203426426a077e7a
      </div>
    );
  }
}

export default ProfilePage;
