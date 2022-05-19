import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <React.Fragment>
        <div>
            <div className='mt-5 ml-8'>
                <Link to="/">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                </Link>
            </div>
            <div className='flex justify-center items-center mt-20 px-10 md:px-0'>
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold pr-4" for="inline-full-name">
                        Email adress
                    </label>
                    </div>
                    <div class="md:w-2/3 pt-5">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="inline-full-name" type="text" placeholder="example@gmail.com" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold pr-4" for="inline-password">
                        Password
                    </label>
                    </div>
                    <div class="md:w-2/3 pt-5">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="inline-password" type="password" placeholder="*******" />
                    </div>
                </div>
                
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    <Link to="/login">
                        <button class="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all hover:shadow-2xl" type="button">
                        Sign Up
                        </button>
                    </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SignUp;