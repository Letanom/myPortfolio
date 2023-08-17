import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import csslogo from "./logos/CSS.svg"
import htmllogo from "./logos/HTML.svg"
import jslogo from "./logos/JavaScript.svg"
import tailwind from "./logos/tailwind.svg"
import reactLogo from "./logos/react.svg"
import figma from "./logos/Figma.svg"




const Features = () => {
        return (
          <Container className='main'>
          <h4 style={{marginBottom:"3%"}}>My Skills</h4>
            <Row className='logos'>
            <Col>
                <img src={reactLogo} alt="React Logo" />
                <p className='text-logo'>React</p>
              </Col>
              <Col>
                <img src={csslogo} alt="CSS Logo" />
                <p className='text-logo'>Css</p>
              </Col>
              <Col>
                <img src={htmllogo} alt="HTML Logo" />
                <p className='text-logo'>Html</p>
              </Col>
              <Col>
                <img src={jslogo} alt="JavaScript Logo" />
                <p className='text-logo'>JavaScript</p>
              </Col>
              <Col>
                <img src={tailwind} alt="Tailwind Logo" />
                  <p className='text-logo'>Tailwind</p>
              </Col>
              <Col>
                <img src={figma} alt="Figma Logo" />
                  <p className='text-logo'>Figma</p>
              </Col>
            </Row>
          </Container>
        );
      }


export default Features;