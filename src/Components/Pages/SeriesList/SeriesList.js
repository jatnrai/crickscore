import React, { useState, useEffect } from 'react';
import Header from '../../Common/Header/Header';
import { Row, Col, Container } from 'react-bootstrap';
import SeriesCard from '../../Common/Cards/SeriesCard';
import { AllSeriesData } from '../../Data/AllSeriesData';



function SeriesList({ dummyTeam }) {
  const [seriesStarted, setSeriesStarted] = useState({});
  const [data, setData] = useState({});

  const handleCountdownEnd = (seriesId) => {
    setSeriesStarted((prev) => ({ ...prev, [seriesId]: true }));
  };

  useEffect(() => {
    setData(AllSeriesData[0].data);
  }, []);

  return (
    <>
      <Header />
      <Container className='mt-4'>
        <h3 className='text-center'>Series list</h3>
        <Row className='justify-content-center'>
          {data && data.length > 0 ? (
            data.map((series) => (
              <SeriesCard
                key={series.id}
                series={series}
                dummyTeam={dummyTeam}
                handleCountdownEnd={handleCountdownEnd}
                seriesStarted={seriesStarted}
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

export default SeriesList;
