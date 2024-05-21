import React from 'react';
import back from '../Assets/back.png';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import card1 from '../Assets/card1.jpg';
import card2 from '../Assets/card2.jpg';
import card3 from '../Assets/card3.jpg';

const Home = () => {
    const containerStyle = {
        background: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', 
        minHeight: '400px',
    };
    
    const overlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#ffffff', 

    };

    const cardContent = [
        {
          title: "Partnership",
          text: "This is the content of card 1.",
          imageUrl: card1
      },
      {
          title: "Sustainability",
          text: "This is the content of card 2.",
          imageUrl: card2
      },
      {
          title: "Innovation",
          text: "This is the content of card 3.",
          imageUrl: card3
      },
      {
        title: "Team work",
        text: "This os tesm work",
        imageUrl: card3
      }
    ]
    
    return (
      <div>
        <Container fluid id="About" style={containerStyle}>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100%' }}>
                <Col md={6} style={overlayStyle}>
                    <div className="head-txt">
                        <h1 className="banner-title">
                          Be part of the change you want to see                        
                        </h1>
                    </div>
                </Col>
            </Row>
        </Container>


        <div style={ { paddingTop: '50px', paddingBottom: '50px'}}>
          <Container>
            <Row xs={1} md={4} className="g-4">
                {
                  cardContent.map((card,idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={card.imageUrl} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                  ))
                }
            </Row>
          </Container>
        </div>
        
    
      </div>
        
    );
}

export default Home ;
