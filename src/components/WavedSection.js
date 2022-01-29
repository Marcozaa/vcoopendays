import React from 'react';
import './waved.css'
import { motion } from 'framer-motion';


export default function WavedSection() {
  return <motion.div className='waved'
    animate={{ opacity: [0,1] }}
    transition={{ duration: 0.9 }}
  >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,261.3C640,235,800,181,960,149.3C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<div className="content">
<div className="left">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p className='learnmore'>learn more</p>
</div>
<div className="right">
    <p> consectetur adipiscing elit. Morbi placerat, ligula non aliquam vehicula, mauris ipsum laoreet elit, congue posuere neque ipsum at justo.</p>

</div>
</div>

 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,261.3C640,235,800,181,960,149.3C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
  </motion.div>;
}
