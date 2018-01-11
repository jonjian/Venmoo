import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Fixed profilepage merge conflict
=======
>>>>>>> More merging
=======
>>>>>>> Wrote important tests

import Form from './Form.jsx'
import TransactionHistory from './TransactionHistory.jsx';

<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Form from './Form.jsx'
>>>>>>> Adds css stylesheet and adds Form component
=======
>>>>>>> Fixed profilepage merge conflict
=======
=======
import Form from './Form.jsx'
>>>>>>> Adds css stylesheet and adds Form component
>>>>>>> More merging
import TransactionHistory from './TransactionHistory.jsx';
>>>>>>> Just cleared up previous conflicts
=======
>>>>>>> Wrote important tests
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Fixed profilepage merge conflict
=======
>>>>>>> More merging
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Form />
>>>>>>> Adds css stylesheet and adds Form component
=======
>>>>>>> Fixed profilepage merge conflict
=======
=======
        <Form />
>>>>>>> Adds css stylesheet and adds Form component
>>>>>>> More merging
        <TransactionHistory transactionHist={this.props.transactionHist}/>
>>>>>>> Just cleared up previous conflicts
=======
        <Form />
        <TransactionHistory transactionHist={this.props.transactionHist}/>

>>>>>>> Wrote important tests
      </div>
    );
  }
}

export default ProfilePage;
