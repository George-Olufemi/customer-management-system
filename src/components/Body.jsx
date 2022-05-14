import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import Slide from 'react-reveal/Slide';

const Body = () => {
  return (
    <React.Fragment>
      <div>
          <div className="body h-screen md:px-10 bg-fixed bg-contain">
          <Slide top>
              <div className="md:flex md:justify-between pt-5">
                  <div className="text-3xl font-semibold ml-10 text-white tracking-widest">
                      <h1 className="md:text-center">masnoo</h1>
                      <h1 className='text-xs text-gray-400'>subsidiary of bestbite</h1>
                  </div>
                  <div className="">
                      <ul className="flex justify-end ml-10 mt-5">
                          <Link to="/signup">
                              <li className='mr-5 md:mr-7 mb-5  md:mt-0 bg-black text-white text-lg px-4 py-1 md:px-6 md:py-2 rounded-lg md:font-semibold hover:bg-gray-900 hover:text-white hover:scale-110 transition-all tracking-widest'>SignUp</li>
                          </Link>
                          <Link to="/login">
                              <li className='mr-10 md:mr-14 mb-5 bg-black text-white text-lg px-4 py-1 md:px-7 md:py-2 rounded-lg md:font-semibold hover:bg-gray-900 hover:text-white hover:scale-110 transition-all tracking-widest'>Login</li>
                          </Link>
                      </ul>
                  </div>
              </div>
            </Slide>
            {/* Text Area */}
            <div>
                <div className="text-white text-4xl md:text-7xl font-bold tracking-wider leading-normal pt-10 md:pt-20 text-center">
                  <h1 className="leading-none px-5 md:px-1">Let's make management and<br /> customer relationship<br /> <span className="underline">easy.</span></h1>
                </div>
                <div className="text-white pt-16 text-semibold text-lg px-5 md:text-3xl text-center">
                  <h1 className="leading-snug">We offer free and exclusive services with limited time offers.<br /> We have new and special offers with 70% off for you to save 30%<br /> of your money with great and outstanding services.<br /> Start today by clicking on the button below, you get free crypto-tokens<br /> and coupons on signup.</h1>
                </div>
            </div>
              <div className='text-center flex justify-center items-center mt-12 text-2xl'>
                  <Link to="/signup">
                      <button className="bg-black text-white text-2xl px-3 py-1 md:px-4 md:py-2 rounded-lg tracking-wider md:font-semibold hover:bg-gray-900 hover:text-white hover:scale-110 transition-all mb-16">Get Started</button>
                  </Link>
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Body;