import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Body = () => {
  return (
    <React.Fragment>
      <div>
          <div className="body text-center h-screen md:px-10 bg-fixed">
            <div className="md:flex md:justify-between pt-5">
                <div className="text-3xl font-semibold ml-10 text-white tracking-widest">
                    <h1>masnoo</h1>
                    <h1 className='text-xs text-gray-400'>subsidiary of bestbite</h1>
                </div>
                <div className="">
                    <ul className="md:flex inline-block ml-10">
                        <Link to="/signup">
                            <li className='md:mr-7 mb-5 mt-5 md:mt-0 bg-black text-white text-lg px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all tracking-widest'>SignUp</li>
                        </Link>
                        <Link to="/login">
                            <li className='md:mr-14 mb-5 bg-black text-white text-lg px-7 py-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all tracking-widest'>Login</li>
                        </Link>
                    </ul>
                </div>
            </div>
            {/* Text Area */}
            <div>
                <div className="text-white md:text-7xl font-bold tracking-wider leading-normal pt-20">
                  <h1 className="leading-none">Let's make management and<br /> customer relationship<br /> <span className="underline">easy.</span></h1>
                </div>
                <div className="text-white pt-16 text-semibold md:text-3xl">
                  <h1 className="leading-snug">We offer free and exclusive services with limited time offers.<br /> We have new and special offers with 70% off for you to save 30%<br /> of your money with good and outstanding services.<br /> Start today by clicking on the button below and you get free crypto tokens<br /> and coupons on signup.</h1>
                </div>
            </div>
              <div className='text-center flex justify-center items-center mt-12 text-2xl'>
                  <Link to="/signup">
                      <button className="bg-black text-white text-2xl px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:scale-110 transition-all">Get Started</button>
                  </Link>
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Body;