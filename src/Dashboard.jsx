import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <React.Fragment>
      <div className='relative'>
        <div className="w-1/5 h-screen bg-black flex flex-col text-center">
              <h1 className="text-white mt-8 text-2xl font-semibold">Hello, George</h1>
              <h1 className="text-white text-lg mt-20 mb-16">Dashboard</h1>
              <h1 className="text-white text-lg mb-16">Products</h1>
              <h1 className="text-white text-lg mb-16">Team</h1>
              <h1 className="text-white text-lg mb-64">Clients</h1>
              <Link to="/">
                  <h1 className="text-white text-lg mb-16">Logout</h1>
              </Link>
        </div>
        {/* <div class="absolute left-96">
          <h1 className="text-black text-lg mb-16">Home</h1>
        </div> */}
      </div>
    </React.Fragment>
  )
}

export default Dashboard;