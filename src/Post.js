import React from 'react'
import './post.css';
import { Link } from "react-router-dom";

const Post = () => {
    
    return (
        <div  className="">
            <div className='pt-6 ml-8'>
                <Link to="/dashboard">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                </Link>
        </div>
        <center>
        <div class="container flex justify-center items-center">
            <form class="row" >
                <h3 className='text-xl pb-5'><u>Add New Product Info</u></h3>
                <div >
                    <label for="Product">
                        Product
                    </label>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black' type="text" required placeholder="Product" name="Product"  /> 
                </div> 
                <div>
                    <label for="Customers">
                        Customers
                    </label>
                    <br/>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black' type="text" required placeholder="Customer" name="Customer"  /> 
                </div> 
                <div >
                    <label className='' for="Amount">
                        Amount
                    </label>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black' type="text" required placeholder="Amount" name="Amount"  />
                </div>
                <div >
                    <label  for="Payment Type">
                        Payment type
                    </label>
                    <br/>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black' type="text" required placeholder="Payment Type" name="Payment"  /> 
                </div>
                <div >
                    <label for="status">
                        Status
                    </label>
                    <br/>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black' type="text" required placeholder="Status" name="Status"  />  
                </div>
                <div class="">
                <Link to="/product">
                    <button className='text-white text-xl font-semibold mt-10 px-4 py-2 bg-black' type="submit">
                    Post
                    </button>
                </Link>
                </div>
            </form>
        </div>
        </center>
    </div>  
 );
}
export default Post;