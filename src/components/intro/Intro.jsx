import React from 'react'
import './Intro.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';

import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { themeContext } from '../../context';
import { useContext } from "react";

import { motion } from 'framer-motion';
const transition = {duration: 2, type: 'spring'}

const Intro = () => {
    const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode? 'white' : ''}}>HY! I Am </span>
                <span>Andrew Thomas</span>
                <span style={{ color: darkMode? 'white' : ''}}>Frontend Developer with high level
                    of experience in web designing and development,
                     producing the quality work
                </span>
            </div>
            <button className='button i-button'>Hire Me</button>
            <div className="i-icons">
                <img src={github} alt='' className='icons' />
                <img src={linkedin} alt='' className='icons' />
                <img src={instagram} alt='' className='icons' />

            </div>
        </div>
        <div className="i-right">
         <img src={vector1} alt='' className='icons' />
         <img src={vector2} alt='' className='icons' />
         <img src={boy} alt='' className='icons' />
              <motion.img
                  initial={{ left: '-30%' }}
                  whileInView={{ left: '-24%' }}
                  transition={transition}
                  src={glassesimoji}
                  alt=''
                  className='icons' />

              <motion.div
                  initial={{ top: '-4%', left: '74%'  }}
                  whileInView={{ left: '68%' }}
                  transition={transition}
                  style={{ top: '-4%', left: '68%' }}
                  className='floating-div'>
                  
                <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </motion.div>
              <motion.div
                  initial={{ top: '18rem', left: '0rem'  }}
                  whileInView={{ left: '-24%' }}
                  transition={transition} style={{ top: '18rem', left: '0rem' }}
                  className='floating-div'>
               
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
              </motion.div>
              
            {/* blur divs */}
            <div className='blur' style={{ background: 'rgb(248 214 355'}}></div>
            <div className='blur' style={{ 
                background: '#C1f5ff',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            
            }}>


            </div>

        </div>
    </div>
  )
}

export default Intro