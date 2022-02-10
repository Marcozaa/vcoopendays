import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import './header.css'
import { motion } from 'framer-motion';
import image1 from './image1.png'
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';


export default function FirstPageContent() {
  return <div className='content'>
       <motion.div className='left'
    animate={{ x: [-400,0] }}
    transition={{ duration: 0.7 }}
  >
          VCO open days.
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div className="button">
      </div>
     
      </motion.div>
      <motion.div className='right'
    animate={{ x: [400,0] }}
    transition={{ duration: 0.7 }}
  >
      
  </motion.div>
  </div>;
}
