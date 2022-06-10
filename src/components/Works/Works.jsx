import React from 'react'
import './Works.css';
import upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import { useContext } from "react";
import {motion} from 'framer-motion';


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='Work'>
        <div className="awesome">
            <span style={{ color: darkMode? 'white' : ''}}> Works for All these</span>
            <span> Brands & Clients </span>
            <span> Lorem ipsum is simply dummy text of printing of printing Lorem ipsum dolor, 
                <br/>
                sit amet consectetur adipilabore autem quisquam culpa impedit
                 eos rem facilis ipsum bea
                 <br/>
                sit amet consectetur adipilabore autem quisquam culpa impedit
                 eos rem facilis ipsum bea
                 <br/>
                sit amet consectetur adipilabore autem quisquam culpa impedit
                 eos rem facilis ipsum bea
        </span>
        <button className='button s-button'>Hire Me</button>            
        <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        
                
        </div>
        {/* right side  */}
        <div className="w-right">
              <motion.div className="w-mainCircle"
                  initial={{ rotate: 45 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{margin: '-40px'}}
                  transition={{duration: 3.5, type: 'spring'}}
              >
                <div className="w-secCircle">
                    <img src={upwork} alt='' />
                </div> 
                <div className="w-secCircle">
                    <img src={fiverr} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={shopify} alt='' />
                </div> 
                <div className="w-secCircle">
                    <img src={facebook} alt='' />
                </div>        
            </motion.div>
            {/* background circle  */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>
        
    </div>
  )
}

export default Works