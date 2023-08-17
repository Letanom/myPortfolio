import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FoodProjectCard from '../components/Projects';



const Projects = () => {
    return (
        <Container fluid="md">
          <Row>
            <Col className='title-project' >My Projects </Col>
            <section>
                <FoodProjectCard/>
            </section>
          </Row>
        </Container>
    )
}

export default Projects