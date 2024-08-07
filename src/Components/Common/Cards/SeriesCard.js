// src/Common/SeriesCard.js
import React from 'react';
import { Card , Col} from 'react-bootstrap';

function SeriesCard({ series, lg, md, xs }) {
  // Your logic to handle the series card
  return (
    <Col lg={lg} md={md} xs={xs} className="mb-4">
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>{series.name}</Card.Title>
        <Card.Text>
          Start Date: {series.startDate}
        </Card.Text>

      </Card.Body>
    </Card>
    </Col>
  );
}

export default SeriesCard;