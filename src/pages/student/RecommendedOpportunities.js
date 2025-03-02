import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const recommendedOpportunities = [
  { id: 1, title: 'Social Media Manager Intern', description: 'Manage social media channels for a startup.' },
  { id: 2, title: 'Content Writer Intern', description: 'Write engaging content for blogs and websites.' },
  { id: 3, title: 'Digital Marketing Intern', description: 'Assist in digital marketing campaigns.' },
];

const RecommendedOpportunities = () => {
  return (
    <Container className="my-4">
      <h2>Recommended Opportunities</h2>
      <ListGroup className="mt-3">
        {recommendedOpportunities.map((opp) => (
          <ListGroup.Item key={opp.id}>
            <Card>
              <Card.Body>
                <Card.Title>{opp.title}</Card.Title>
                <Card.Text>{opp.description}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default RecommendedOpportunities;
