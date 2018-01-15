import React from 'react';

import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPayment: true,
      otherUser: '',
      amount: '',
      message: '',
      validAmount: false,
    };

    this.togglePaymentTrue = this.togglePaymentTrue.bind(this);
    this.togglePaymentFalse = this.togglePaymentFalse.bind(this);
    this.otherUserChangeHandler = this.otherUserChangeHandler.bind(this);
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.messageChangeHandler = this.messageChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.formSubmitHandlerGate = this.formSubmitHandlerGate.bind(this);

    this.updateState = props.updateState;
  }


  togglePaymentTrue(event) {
    event.preventDefault();
    if (!this.state.isPayment) {
      this.setState({ isPayment: true });
    }
  }

  togglePaymentFalse(event) {
    event.preventDefault();
    if (this.state.isPayment === true) {
      this.setState({ isPayment: false });
    }
  }

  otherUserChangeHandler(event) {
    event.preventDefault();
    this.setState({otherUser: event.target.value})
  }

  amountChangeHandler(event) {
    event.preventDefault();
    this.setState({amount: event.target.value})

    const amountRegex = /^[0-9]+(\.[0-9][0-9])?$/;
    let bool = !!(event.target.value.match(amountRegex) !==  null)
    this.setState({ validAmount: bool });
  }

  messageChangeHandler(event) {
    event.preventDefault();
    this.setState({message: event.target.value})
  }

  formSubmitHandlerGate(event) {
    event.preventDefault();
    if (this.state.validAmount === true) {
      return this.formSubmitHandler(event);
    } else {
      console.log('No submission: bad dollar amount') // TODO
    }
  }

  formSubmitHandler(event) {
    event.preventDefault();
    var time = new Date();
    var url = this.state.isPayment ? '/payment' : '/request';
    axios.post(url, {
      senderObj: this.props.user,
      username: this.state.otherUser,
      amount: this.state.amount,
      isPayment: this.state.isPayment,
      message: this.state.message
    })

    .then((response) => {

      this.updateState();
    })
    .catch((error) => {
      console.log('invalid username') //TODO flesh this out
      throw error;
    });
  }

  render() {
    return(
      <div id="form">
        <br />
        <div className='tab'>
          <button type="submit" onClick={this.togglePaymentTrue}> Pay </button>
          <button type="submit" onClick={this.togglePaymentFalse}> Request </button>
        </div>

        <form onSubmit={this.formSubmitHandlerGate}>
          <br />
          <br />
          <label> To: </label>
          <input type="textarea" onChange={this.otherUserChangeHandler} />
          <br />
          <br />
          <label> Amount: </label>
          $<input type="textarea" onChange={this.amountChangeHandler} />
          <br />
          <br />
          <label> Message: </label>
          <input type="textarea" onChange={this.messageChangeHandler} />
          <br />
          <br />
          <br />
          {this.state.isPayment ?
          (<div> <button id="decisionBtn" type="submit" value="Submit">
            Pay </button> </div>)
          :
          (<div> <button id="decisionBtn" type="submit"> Request </button> </div>)}
        </form>
      </div>
  )};
}

export default Form;
