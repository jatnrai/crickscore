// Home.js
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {LiveMatchesData} from '../../Data/LiveMatchesData';
import LiveMatchesCard from './LiveMatchesCard';
import Header from '../../Common/Header/Header';

function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(LiveMatchesData[0].data)
  } ,[])

  const dummyTeam = [
    {img: "https://www.gstatic.com/onebox/sports/logos/crest_48dp.png", name: "TBA"},
    {img: "https://www.gstatic.com/onebox/sports/logos/crest_48dp.png", name: "TBA"},
  ]

  console.log(data);

  return (
    <div>
      <Header />
      <Container>
      <LiveMatchesCard  data={data}  dummyTeam={dummyTeam} />
    </Container>
     </div>
  );
}

export default Home;