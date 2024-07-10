import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

export default function LiveMatchesCard({ data }) {
  return (
<Row>
  {data && data.length > 0 ? (
    data.map((match) => (
      <Col md={6} xs={12} className="mb-4" key={match.id}>
        <Card>
          <Card.Title className='text-center'>{match.name}</Card.Title>
          <Card.Body>
            {match.teamInfo && match.teamInfo.length > 0 ? (
              <Row className="d-flex justify-content-between">
                {match.teamInfo.map((team, index) => (
                  <Col key={index} className="mb-4 d-flex align-items-center">
                    <Image src={team.img} rounded width={50} />
                    <Card.Text className="ml-2">{team.name} ({team.shortname})</Card.Text>
                  </Col>
                ))}
              </Row>
            ) : (
              <p>No team information available</p>
            )}
          </Card.Body>
        </Card>
      </Col>
    ))
  ) : (
    <Row>
      <Col>
        <p>No data available</p>
      </Col>
    </Row>
  )}
</Row>
  );
}