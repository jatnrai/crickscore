import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Image, CardHeader } from 'react-bootstrap';


function Countdown({ startTime }) {
  const [timeRemaining, setTimeRemaining] = useState('');

    const CountdownText = {
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold'
    }
  

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date(startTime);
      
      const istOffset = 5.5 * 60 * 60 * 1000;
      const startInIST = new Date(start.getTime() + istOffset);
      
      const diff = startInIST - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeRemaining('Match has started!');
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return <Card.Text className='text-center' style={CountdownText}>{timeRemaining}</Card.Text>;
};


export default function LiveMatchesCard({ data, dummyTeam }) {
  return (
    <Row>
      {data && data.length > 0 ? (
        data.map((match) => (
          <Col md={6} xs={12} className="mb-4" key={match.id}>
            <Card>
              <CardHeader className='p-2.5'>
                <h6 className='text-start fw-normal m-0'>{match.name}</h6>
              </CardHeader>
              <Card.Body>
                {match.dateTimeGMT && <Countdown startTime={match.dateTimeGMT} />}
                {match.teamInfo && match.teamInfo.length > 0 ? (
                  <Row className="d-flex justify-content-between">
                    {match.teamInfo.map((team, index) => (
                      <Col key={index} className="mb-4 d-flex align-items-center">
                        <Image src={team.img} rounded width={50} />
                        <Card.Text className="ml-2 ms-2">{team.shortname ? team.shortname : team.name}</Card.Text>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <Row className="d-flex justify-content-between">
                    {dummyTeam.map((team, index) => (
                      <Col key={index} className="mb-4 d-flex align-items-center">
                        <Image src={team.img} rounded width={50} />
                        <Card.Text className="ml-2 ms-2">{team.name}</Card.Text>
                      </Col>
                    ))}
                  </Row>
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