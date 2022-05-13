import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <React.Fragment>
        <div className="text-center mt-28 md:px-10">
            <h1 className='md:text-5xl font-semibold mb-7'>Welcome to the best Customer Managemant System ever!</h1>
            <h1 className='md:text-5xl font-semibold mb-7'>A place where we put our customer needs first before anything.</h1>
            <h1 className='md:text-5xl font-semibold mb-7'>Your demands are met at a spree without hitches of any kind.</h1>
            <h1 className='md:text-5xl font-semibold mb-7'>We deliver quality services to our customers/clients.</h1>
        </div>
        <div className='text-center flex justify-center items-center mt-20 text-2xl'>
            <Link to="/signup">
                <button className="bg-black text-white text-2xl px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all">Get Started</button>
            </Link>
        </div>
    </React.Fragment>
  )
}

export default Body;