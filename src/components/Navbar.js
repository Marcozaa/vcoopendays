import React from 'react';
import './navbar.css'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { motion } from "framer-motion"
import DrawerMenu from './DrawerMenu';
import { Link } from "react-router-dom";


  
export default function Navbar() {

  return(
  <motion.div className='navbar'
    animate={{ opacity: [0,1] }}
    transition={{ duration: 0.5 }}
  >
 
      <div className="left">
          workshop.
      </div>
      <div className="right">
          <Link to="/impara">Impara</Link>
          <Link to="/scuole">Scuole</Link>
          <h3>Esplora</h3>
         
    </div>
    <div className="right2">
       <DrawerMenu />
        <ColorModeSwitcher justifySelf="flex-end" />
    </div>
  </motion.div>
  

)

}
