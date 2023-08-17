import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kevphoto from "../images/Kevin.jpg";
const Hero = () => {
  return (
    <Container className='main' >
    <Col className='wrap-main' >
    <h1 className='title'>Hi I'm Kevin Ozsimsek</h1>
    <h4>i'm a Front-End Developer</h4>
    <p>Hello! I am an energetic Front End Developer equipped with a wide range of technological skills. I collaborate effectively with both frontend and backend teams to create user-friendly web interfaces. I am continuously improving my expertise in HTML, CSS, JavaScript, and React. I have honed my UI/UX design skills using Figma.</p>
    <img className='kevphoto' src={kevphoto}/>
    
      

    </Col>
    
  </Container>

  )
}

export default Hero