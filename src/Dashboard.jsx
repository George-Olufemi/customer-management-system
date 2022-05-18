import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <React.Fragment>
      <motion.div 
        className='relative'
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{ opacity: 0, x: window.innerWidth, transition: { duration:0.6 } }}
        >
        <div className="hidden md:block w-1/5 h-screen bg-black text-center">
              <h1 className="text-white pt-8 text-2xl font-semibold pb-32 tracking-wider">Dashboard</h1>
              <Link to="/">
                  <h1 className="text-white text-xl mb-16 tracking-wider">Home</h1>
                </Link>
              <Link to="/product">
                <h1 className="text-white text-xl mb-16 tracking-wider">Products</h1>
              </Link>
              <Link to="/team">
                <h1 className="text-white text-lg mb-16">Team</h1>
              </Link>
              <Link to="/client">
                <h1 className="text-white text-lg pb-64">Clients</h1>
              </Link>
              <Link to="/">
                  <h1 className="text-white text-lg mb-16">Logout</h1>
              </Link>
        </div>
        {/* <div class="absolute left-96">
          <h1 className="text-black text-lg mb-16">Home</h1>
        </div> */}
      </motion.div>
    </React.Fragment>
  )
}

export default Dashboard;