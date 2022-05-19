import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import dash from './dash/dash.png';
// import img1 from './img1/stat1.png';
// import img2 from './img2/stat2.png';
// import img3 from './img3/stat3.png';

function Dashboard() {
  return (
    <React.Fragment>
      <motion.div 
        className='md:flex'
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
        <div class="">
          <h1 className="text-black text-3xl font-bold pt-9 pl-10">Welcome</h1>
          <h1 className="text-black text-lg pl-10">You are logged in as <span className="text-blue-500">admin</span></h1>
          <div>
            <img className='px-5 pt-5' src={dash} alt="dashboard graph" />
            {/* <div className='flex'>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Dashboard;