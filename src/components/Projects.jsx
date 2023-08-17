import React from 'react';
import Card from 'react-bootstrap/Card';

import foodpic from '../images/foodp.png';
import ecommerce from '../images/ecommerce.png';
import youtubedow from '../images/youtbed.png';
import colorbox from '../images/colorbox.png';
import jobrouter from '../images/jobrouter.png';

const projects = [
  {
    title: 'Food Menu',
    image: foodpic,
    description:
      'A Food Menu filtering application with category buttons built using React and Tailwind CSS.',
    link: 'https://splendid-cactus-a0526a.netlify.app/',
  },
  {
    title: 'E Commerce',
    image: ecommerce,
    description:
      'An E-Commerce website created using Redux Toolkit, Axios, Bootstrap CSS, and custom CSS styles.',
    link: 'https://scintillating-donut-7f14ff.netlify.app/',
  },
  {
    title: 'YouTube MP3 Downloader',
    image: youtubedow,
    description: 'Paste a YouTube link and convert it to MP3 with this handy tool.',
    link: 'https://statuesque-daffodil-d65b90.netlify.app/',
  },
  {
    title: 'Color Box',
    image: colorbox,
    description: 'Change the color of a box by providing a color name. A simple React project.',
    link: 'https://preeminent-hotteok-64aace.netlify.app/',
  },
  {
    title: 'Job Finder Website',
    image: jobrouter,
    description: 'Find job opportunities using this website developed with React.',
    link: 'https://timely-sable-473fd4.netlify.app/',
  },
];

const FoodProjectCard = () => {
  return (
    <div className='cards-wrapper' id='projects'>
      {projects.map((project, index) => (
        <Card className='card' key={index} style={{ width: '30%', scale: '96%' }}>
          <Card.Img variant='top' src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link style={{ textDecoration: 'none' }} href={project.link}>
              Project Link
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FoodProjectCard;
