import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Fixed profilepage merge conflict

import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';


=======
<<<<<<< HEAD
=======
import Form from './Form.jsx'
>>>>>>> Adds css stylesheet and adds Form component
=======
>>>>>>> Fixed profilepage merge conflict
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
<<<<<<< HEAD
=======
>>>>>>> Fixed profilepage merge conflict
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>

=======
<<<<<<< HEAD
=======
        <Form />
>>>>>>> Adds css stylesheet and adds Form component
=======
>>>>>>> Fixed profilepage merge conflict
        <TransactionHistory transactionHist={this.props.transactionHist}/>
>>>>>>> Just cleared up previous conflicts
      </div>
    );
  }
}

export default ProfilePage;
