import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Connect = () => {
    return (
        <Container className='connect-container' id='connect' >
            <Col className='wrap-connect' >
                <h1 className='title'>Dont be shy</h1>
                <h4>Connect with me :)</h4>
                <div className='button-container'>
                <Link to = "https://github.com/Letanom">
                <button className='buttonGit'>
                    
                        <FaGithub /> Github
                      
                    </button>
               

                </Link>
                    

                <Link to = "https://www.linkedin.com/in/kevın-özşimşek-2a8773194/">
                <button className='buttonLinkedin'>
                    
                        <FaLinkedin /> Linkedin
                      
                    </button>
               

                </Link>


                </div>
            </Col>
        </Container>

    )
}

export default Connect