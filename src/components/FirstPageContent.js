import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import './header.css'
import { motion } from 'framer-motion';
import image1 from './image1.png'
import { Link } from 'react-router-dom';


export default function FirstPageContent() {
  return <div className='content'>
       <motion.div className='left'
    animate={{ x: [-400,0] }}
    transition={{ duration: 0.7 }}
  >
          Lorem ipsium lorem ipsium.
          <p>Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici,
             designer, programmatori e tipografi a modo riempitivo per bozzetti e prove</p>
          <div className="button">
<Button colorScheme='twitter' leftIcon={<FaTwitter />}>
  <Link to="registrati">
    Registrati
    </Link>
  </Button>

          
      </div>
     
      </motion.div>
      <motion.div className='right'
    animate={{ x: [400,0] }}
    transition={{ duration: 0.7 }}
  >
      
  </motion.div>
  </div>;
}
