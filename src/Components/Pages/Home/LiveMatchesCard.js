import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Image, CardHeader } from 'react-bootstrap';



function Countdown({ startTime, onEnd }) {
  const [timeRemaining, setTimeRemaining] = useState('');

  const CountdownText = {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: '#f016160f',
    width: '75px',
    margin: "0 auto",
    padding: '.4rem .6rem',
    borderRadius: '.3rem'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date(startTime);
      
      const istOffset = 5.5 * 60 * 60 * 1000; // IST is +5:30 hours ahead of UTC
      const startInIST = new Date(start.getTime() + istOffset);
      
      const diff = startInIST - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeRemaining('0s');
        onEnd();
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let timeString = '';
        if (days > 0) {
          timeString = `${days}d`;
        } else {
          if (hours > 0) {
            timeString += `${hours}h `;
          }
          if (minutes > 0 || hours > 0) {
            timeString += `${minutes}m `;
          }
          if (seconds > 0 || minutes > 0 || hours > 0) {
            timeString += `${seconds}s`;
          }
        }
        setTimeRemaining(timeString.trim());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, onEnd]);

  return <Card.Text style={CountdownText}>{timeRemaining}</Card.Text>;
}



export default function LiveMatchesCard({ data, dummyTeam }) {
  const [matchStarted, setMatchStarted] = useState({});

  const LiveMatche = {
    backgroundColor: 'red',
    backgroundImage: 'linear-gradient(to right, green 5%, white)',
    width: '150px',
    padding: '.1rem .4rem',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 'smaller'
  };

  const handleCountdownEnd = (matchId) => {
    setMatchStarted((prev) => ({ ...prev, [matchId]: true }));
  };

  // const sortedData = data.slice().sort((a, b) => new Date(a.dateTimeGMT) - new Date(b.dateTimeGMT));

  return (
    <Row>
      {data && data.length > 0 ? (
        data.map((match) => (
          <Col md={6} xs={12} className="mb-4" key={match.id}>
            <Card>
              <CardHeader className='p-2.8'>
                <h6 className='text-start fw-normal m-0'>{match.name}</h6>
              </CardHeader>
              <Card.Body>
                {match.teamInfo && match.teamInfo.length > 0 ? (
                  <Row className="d-flex justify-content-between align-items-center">
                    <Col className="my-2 d-flex align-items-center justify-content-center flex-column">
                    <div className='d-flex align-items-center' style={{margin: '0 auto 0 0 '}}>
                      <Image src={match.teamInfo[0].img} rounded width={40} />
                      <Card.Text className="ml-2 ms-2 fw-bold">{match.teamInfo[0].shortname ? match.teamInfo[0].shortname : match.teamInfo[0].name}</Card.Text>
                    </div>
                    
                    <div style={{margin: '0 auto 0 0 '}}>
                      <span className='fw-light' style={{fontSize: '15px'}}>{match.teamInfo[0].name}</span>
                    </div>
                    </Col>

                    <Col className='my-2'>
                      {match.dateTimeGMT && <Countdown startTime={match.dateTimeGMT} onEnd={() => handleCountdownEnd(match.id)} />}
                    </Col>

                    <Col className="my-2 d-flex align-items-center justify-content-center flex-column">
                    <div className='d-flex align-items-center' style={{margin: '0 0 0 auto'}}>
                      <Card.Text className="mb-0 me-2 fw-bold">{match.teamInfo[1].shortname ? match.teamInfo[1].shortname : match.teamInfo[1].name}</Card.Text>
                      <Image src={match.teamInfo[1].img} rounded width={40} />
                      </div>

                      <div style={{margin: '0 0 0 auto'}}>
                      <span className='fw-light' style={{fontSize: '15px'}}>{match.teamInfo[1].name}</span>
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



// return (
//   <Row>
//     {sortedData && sortedData.length > 0 ? (
//       sortedData.map((match) => (
//         <Col md={6} xs={12} className="mb-4" key={match.id}>
//           <Card>
//             <CardHeader className='p-2.8'>
//               <h6 className='text-start fw-normal m-0'>{match.name}</h6>
//             </CardHeader>
//             <Card.Body>
//               {match.teamInfo && match.teamInfo.length > 0 ? (
//                 <Row className="d-flex justify-content-between align-items-center">
//                   <Col className="my-2 d-flex align-items-center justify-content-center">
//                     <Image src={match.teamInfo[0].img} rounded width={40} />
//                     <Card.Text className="ml-2 ms-2 fw-bold">{match.teamInfo[0].shortname ? match.teamInfo[0].shortname : match.teamInfo[0].name}</Card.Text>
                  
//                   <div>
//                     <span>{match.teamInfo[0].name}</span>
//                   </div>
//                   </Col>

//                   <Col className='my-2'>
//                     {match.dateTimeGMT && <Countdown startTime={match.dateTimeGMT} onEnd={() => handleCountdownEnd(match.id)} />}
//                   </Col>

//                   <Col className="my-2 d-flex align-items-center justify-content-center">
//                     <Card.Text className="mb-0 me-2 fw-bold">{match.teamInfo[1].shortname ? match.teamInfo[1].shortname : match.teamInfo[1].name}</Card.Text>
//                     <Image src={match.teamInfo[1].img} rounded width={40} />
//                   </Col>
//                 </Row>
//               ) : (
//                 <Row className="d-flex justify-content-between">
//                   {dummyTeam.map((team, index) => (
//                     <Col key={index} className="mb-4 d-flex align-items-center">
//                       <Image src={team.img} rounded width={50} />
//                       <Card.Text className="ml-2 ms-2">{team.name}</Card.Text>
//                     </Col>
//                   ))}
//                 </Row>
//               )}

//               {match.dateTimeGMT && matchStarted[match.id] &&
//                 <Card.Text className='text-center' style={LiveMatche}>Live Now</Card.Text>
//               }
//             </Card.Body>
//           </Card>
//         </Col>
//       ))
//     ) : (
//       <Row>
//         <Col>
//           <p>No data available</p>
//         </Col>
//       </Row>
//     )}
//   </Row>
// );