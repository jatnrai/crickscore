// src/components/LiveMatchesCard.js
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MatchCard from '../../Common/MatchCard';

export default function LiveMatchesCard({ data, dummyTeam }) {
  const [matchStarted, setMatchStarted] = useState({});

  const handleCountdownEnd = (matchId) => {
    setMatchStarted((prev) => ({ ...prev, [matchId]: true }));
  };

  return (
    <Row className='flex-row' style={{flexWrap: 'nowrap', overflow: 'scroll'}}>
      {data && data.length > 0 ? (
        data.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            dummyTeam={dummyTeam}
            handleCountdownEnd={handleCountdownEnd}
            matchStarted={matchStarted}
            lg={5}
            md={8}
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
  );
}