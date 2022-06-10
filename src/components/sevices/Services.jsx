import React from 'react'
import './services.css';
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../Card/Card';
import resume from '../../img/resume.pdf';
import { themeContext } from '../../context';
import { useContext } from "react";
import { motion } from 'framer-motion';
const transition = {duration: 1, type: 'spring'}


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        <div className="awesome">
            <span style={{ color: darkMode? 'white' : ''}}> My Awesome</span>
            <span> Services</span>
            <span> Lorem ipsum is simply dummy text of printing of printing Lorem ipsum dolor, 
                <br/>
                sit amet consectetur adipilabore autem quisquam culpa impedit
                 eos rem facilis ipsum bea
        </span>
        <a href={resume} download>
        <button className='button s-button'>Download CV</button>            
        </a>
        <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>

      <div className="cards" >
        <motion.div style={{ left: '14rem ' }}
          initial={{ left: '25%' }}
          whileInView={{ left: '14rem' }}
          transition={transition}>
            <Card
            emoji = {heartemoji}
            heading = {'Design'}
            detail = {'Figma, Sketch, Photoshop, Adobe, Adobe XD'}

            />   
</motion.div>
        <div style={{ left: '-4rem ', top: '12rem' }}
        initial={{ left: '25%' }}
        whileInView={{ left: '14rem' }}
        transition={transition}>
            <Card
            emoji = {glasses}
            heading = {'Developer'}
            detail = {'HTML, CSS, JavaScript, React, NEXTJS JavaScript, React, NEXTJS'}

            />   
            </div>
        <div style={{ left: '12rem ', top: '19rem' }}
        initial={{ left: '25%' }}
        whileInView={{ left: '14rem' }}
        transition={transition}>
            <Card
            emoji = {humble}
            heading = {'UI/UX'}
            detail = {'Sketching, UX Research, Prototyping, Wireframing, Demos'}

            />   
            </div>
            <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>
            </div>
        </div>

 
  )
}

export default Services