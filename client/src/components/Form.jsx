import React from 'react';
// import Pay from './Pay';
// import Request from './Request';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isPayment: true };

    this.togglePaymentTrue = this.togglePaymentTrue.bind(this);
    this.togglePaymentFalse = this.togglePaymentFalse.bind(this);
  }


  togglePaymentTrue(event) {
    event.preventDefault();
    if(!this.state.isPayment) {
      this.setState({ isPayment: true });
    }
  }

  togglePaymentFalse(event) {
    event.preventDefault();
    if(this.state.isPayment === true) {
      this.setState({ isPayment: false });
    }
  }

  render() {
    return(
      <div id='form'>
        FORM STUFF
        <br />
        <form>
          <h1> {this.state.isPayment ? 'TRUE' : 'FALSE'} </h1>
          <div className='tab'>
            <button type="submit" onClick={this.togglePaymentTrue}> Pay </button>
            <button type="submit" onClick={this.togglePaymentFalse}> Request </button>
          </div>
          <br />
          <br />
          <label> To: </label>
          <input type="textarea" />
          <br />
          <br />
          <label> Amount: </label>
          <input type="textarea" label="$" />
          <br />
          <br />
          <label> Message: </label>
          <input type="textarea" />
          <br />
          <br />
          <br />
          {this.state.isPayment ?
          (<div> <button id="decisionBtn" type="submit"> Pay </button> </div>)
          :
          (<div> <button id="decisionBtn" type="submit"> Request </button> </div>)}
        </form>
      </div>
  )}
}

export default Form;
