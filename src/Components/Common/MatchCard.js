// src/components/MatchCard.js
import React from 'react';
import { Card, Row, Col, Image, CardHeader } from 'react-bootstrap';
import Countdown from './Countdown';

const MatchCard = ({ match, dummyTeam, handleCountdownEnd, matchStarted, lg, md, xs }) => {
  const LiveMatche = {
    backgroundColor: 'red',
    backgroundImage: 'linear-gradient(to right, green 5%, white)',
    width: '150px',
    padding: '.1rem .4rem',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 'smaller'
  };

  return (
    <Col lg={lg} md={md} xs={xs} className="mb-4">
      <Card>
      <CardHeader className='p-2.8'>
                <h6 className='text-start fw-normal m-0 mobile-font-size-12p'>{match.name}</h6>
            </CardHeader>
        <Card.Body>
          {match.teamInfo && match.teamInfo.length > 0 ? (
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="my-2 d-flex align-items-center justify-content-center flex-column">
                <div className='d-flex align-items-center' style={{ margin: '0 auto 0 0 ' }}>
                  <Image src={match.teamInfo[0].img} rounded width={40} />
                  <Card.Text className="ml-2 ms-2 fw-bold reponsive_small_title">{match.teamInfo[0].shortname ? match.teamInfo[0].shortname : match.teamInfo[0].name}</Card.Text>
                </div>

                <div style={{ margin: '0 auto 0 0 ' }}>
                  <span className='fw-light responsice_card_team_name'>{match.teamInfo[0].name}</span>
                </div>
              </Col>

              <Col className='my-2'>
                {match.dateTimeGMT && <Countdown startTime={match.dateTimeGMT} onEnd={() => handleCountdownEnd(match.id)} />}
              </Col>

              <Col className="my-2 d-flex align-items-center justify-content-center flex-column">
                <div className='d-flex align-items-center' style={{ margin: '0 0 0 auto' }}>
                  <Card.Text className="mb-0 me-2 fw-bold reponsive_small_title">{match.teamInfo[1].shortname ? match.teamInfo[1].shortname : match.teamInfo[1].name}</Card.Text>
                  <Image src={match.teamInfo[1].img} rounded width={40} />
                </div>

                <div style={{ margin: '0 0 0 auto' }}>
                  <span className='fw-light responsice_card_team_name' >{match.teamInfo[1].name}</span>
                </div>
              </Col>
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

          {match.dateTimeGMT && matchStarted[match.id] &&
            <Card.Text className='text-center' style={LiveMatche}>Live Now</Card.Text>
          }
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MatchCard;