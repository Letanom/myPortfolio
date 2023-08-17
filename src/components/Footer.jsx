import React from 'react'

import { Row } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footer-content'>
          <span>This website designed by Kevin Ozsimsek with</span>
          <FaHeart className='fa-heart' />
        </div>
      </footer>
    );
  }

export default Footer