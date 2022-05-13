import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
        <div className="md:flex md:justify-between mt-4">
            <div className="text-3xl font-bold ml-10">
                <h1>CMS</h1>
            </div>
            <div className="">
                <ul className="md:flex inline-block ml-10">
                    <Link to="/signup">
                        <li className='md:mr-7 mb-5 mt-5 md:mt-0 bg-black text-white text-lg px-3 py-1 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all'>SignUp</li>
                    </Link>
                    <Link to="/login">
                        <li className='md:mr-14 mb-5 bg-black text-white text-lg px-3 py-1 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all'>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Navbar;