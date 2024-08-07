// Home.js
import React, { useEffect, useState } from 'react';
import { Container, TabContainer } from 'react-bootstrap';
import {LiveMatchesData} from '../../Data/LiveMatchesData';
import {AllSeriesData} from '../../Data/AllSeriesData';
import LiveMatchesCard from './LiveMatchesCard';
import Header from '../../Common/Header/Header';
import "./Home.css";
import { Link } from 'react-router-dom';
import HomeSeriesCards from './HomeSeriesCards';

function Home() {
  const [data, setData] = useState({});
  const [seriesData, setSeriesData] = useState({});

  const HomebannerLink ={
    textDecoration: 'none',
    color: '#fff',
  }

  useEffect(() => {
    setData(LiveMatchesData[0].data)
  } ,[])
  useEffect(() => {
    setSeriesData(AllSeriesData[0].data);
  }, []);



  const dummyTeam = [
    {img: "https://www.gstatic.com/onebox/sports/logos/crest_48dp.png", name: "TBA"},
    {img: "https://www.gstatic.com/onebox/sports/logos/crest_48dp.png", name: "TBA"},
  ]

  console.log(data);

  return (
    <div>
      <Header />
      <div className='homeBanner'>
        <h2 className='p-4 m-3 text-center'>Choose any option or search matches according to countary name.</h2>
        <Container>
        <div className='d-flex justify-content-around m-3'>
        <Link className='fs-4' style={HomebannerLink} to='/livematches'>Live Matches</Link>
        <Link className='fs-4' style={HomebannerLink} to='/SeriesList'>Series list</Link>
        </div>
        </Container>
      </div>
      <Container>
      <h3 className='text-start m-3'>Live Matches</h3>
      <LiveMatchesCard  data={data}  dummyTeam={dummyTeam} />
      <h3 className='text-start m-3'> Series List</h3>
      <HomeSeriesCards seriesData={seriesData}  dummyTeam={dummyTeam}/>
    </Container>
     </div>
  );
}

export default Home;