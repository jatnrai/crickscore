// Home.js
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {LiveMatchesData} from '../Data/LiveMatchesData';
import LiveMatchesCard from './LiveMatchesCard';

function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(LiveMatchesData[0].data)
  } ,[])

  console.log(data);

  return (
    <div>
      <h2>Home</h2>
      <Container>
      <LiveMatchesCard  data={data}/>
    </Container>
     </div>
  );
}

export default Home;