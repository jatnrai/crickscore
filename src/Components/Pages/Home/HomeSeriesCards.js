// src/components/LiveMatchesCard.js
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SeriesCard from '../../Common/Cards/SeriesCard';

export default function HomeSeriesCards({ seriesData, dummyTeam }) {
  const [matchStarted, setMatchStarted] = useState({});

  const handleCountdownEnd = (matchId) => {
    setMatchStarted((prev) => ({ ...prev, [matchId]: true }));
  };

  return (
    <Row className='flex-row' style={{flexWrap: 'nowrap', overflow: 'scroll'}}>
      {/* {seriesData && seriesData.length > 0 ? (
        seriesData.map((match) => (
          <SeriesCard
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
      )} */}
      {seriesData && seriesData.length > 0 ? (
        seriesData.map((series) => (
              <SeriesCard
                key={series.id}
                series={series}
                dummyTeam={dummyTeam}
                handleCountdownEnd={handleCountdownEnd}
                lg={5}
                md={8}
                xs={10}
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