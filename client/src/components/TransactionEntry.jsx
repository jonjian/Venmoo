import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';

import { capitalize } from './../helpers.js';

class TransactionEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { transaction, user } = this.props;
    const sender = capitalize(transaction.sender_name === user.name ? 'you' : transaction.sender_name);
    const receiver = capitalize(transaction.receiver_name === user.name ? 'you' : transaction.receiver_name);

    let text;
    let timestamp;

    if (transaction.type === 'payment') {
      text = `${sender} paid ${receiver} ${transaction.amount}`;
      timestamp = transaction.resolved_timestamp;
    } else if (transaction.type === 'request') {
      text = `${receiver} charged ${sender} ${transaction.amount}`;
      timestamp = transaction.created_timestamp;
    }

    return (
      <div id="transactionCard">
        <Card>
          <CardBody>
            <CardTitle>Transaction:</CardTitle>
            <CardSubtitle>{timestamp}</CardSubtitle>
            <CardText>
              {text}
            </CardText>
            <Button>View Profile</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TransactionEntry;
