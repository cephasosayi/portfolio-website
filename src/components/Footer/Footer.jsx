import React from 'react'
import './Footer.css';
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'


const Footer = () => {
  return (
      <div className='footer'>
          <img src={wave} alt='' />
          <div className="f-content">
              <span>cephasosayi@gmail.com</span>
              <div className="f-icons">
                  <Insta color='white' size='3rem' />
                  <Twitter color='white' size='3rem' />
                  <Github color='white' size='3rem' />

                  
              </div>
          </div>

    </div>
  )
}

export default Footer