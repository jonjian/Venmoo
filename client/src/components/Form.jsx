import React from 'react';
// import Pay from './Pay';
// import Request from './Request';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isPayment: true };
  }

  render() {
    return(
      <div id='form'>
        FORM STUFF
        <br />
        <button type='submit'> Pay </button>
        <button type='submit'> Request </button>
        <br />
        <br />
        <label> To: </label>
        <input type='textarea' />
        <br />
        <br />
        <label> Amount: </label>
        <input type='textarea' />
        <br />
        <br />
        <label> Message: </label>
        <input type='textarea' />

      </div>
  )}
}

export default Form;
