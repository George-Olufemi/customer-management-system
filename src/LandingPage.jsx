import React from 'react';
import Body from './components/Body';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{ opacity: 0, x: window.innerWidth, transition: { duration:0.9 } }}
      >
        <Body />
      </motion.div>
    </React.Fragment>
  )
}

export default LandingPage;