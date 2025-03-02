import React from 'react';
import { Container, ListGroup, Card } from 'react-bootstrap';

const paymentTransactions = [
  { id: 1, date: '2025-01-10', amount: 'MK50,000', description: 'Payment for milestone 1' },
  { id: 2, date: '2025-02-05', amount: 'MK75,000', description: 'Payment for milestone 2' },
];

const PaymentHistory = () => {
  return (
    <Container className="my-4">
      <h2>Payment History</h2>
      {paymentTransactions.length > 0 ? (
        <ListGroup className="mt-3">
          {paymentTransactions.map((tx) => (
            <ListGroup.Item key={tx.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{tx.date}</Card.Title>
                  <Card.Text>
                    {tx.amount} – {tx.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No payment transactions available.</p>
      )}
    </Container>
  );
};

export default PaymentHistory;
