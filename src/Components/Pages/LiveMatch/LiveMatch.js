// LiveMatch.js
import React, { useState, useEffect } from 'react';
import Header from '../../Common/Header/Header';
import { Row, Col, Container } from 'react-bootstrap';
import MatchCard from '../../Common/Cards/MatchCard';
import {LiveMatchesData} from '../../Data/LiveMatchesData';


function LiveMatch({ dummyTeam }) {
  const [matchStarted, setMatchStarted] = useState({});
  const [data, setData] = useState({});

  
    const handleCountdownEnd = (matchId) => {
      setMatchStarted((prev) => ({ ...prev, [matchId]: true }));
    };



  useEffect(() => {
    setData(LiveMatchesData[0].data)
  } ,[])

    return (
  <>
  <Header />
  <Container className='mt-4'>
  <h3 className='text-center'>Live Matches</h3>

      <Row className='justify-content-center'>
        {data && data.length > 0 ? (
          data.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              dummyTeam={dummyTeam}
              handleCountdownEnd={handleCountdownEnd}
              matchStarted={matchStarted}
              lg={6}
              md={10}
              xs={11}
            />
          ))
        ) : (
          <Row>
            <Col>
              <p>No data available</p>
            </Col>
          </Row>
        )}
      </Row>
  </Container>
  </>
    );
}
export default LiveMatch;


// src/components/LiveMatchesCard.js
