import React from 'react'
import '../post.css';

const Post = () => {
    
    return (
        <div  className="bg-gray-200">
<div className='pt-6 ml-8'>
                <Link to="/dashboard">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                </Link>
        </div>
        <div class="container">
            <form class="row" >

                <h3><u>Add New Product Info</u></h3>

                <div >
                    <label  for="Product">
                        Product
                    </label>
                    <br/>
                    <input   type="text" required placeholder="Product" name="Product"  /> 
                </div> 
                <br/>

                <div>
                    <label for="Customers">
                        Customers
                    </label>
                    <br/>
                    <input  type="text" required placeholder="Customer" name="Customer"  /> 
                </div> 
                <br/>
                <div >
                    <label  for="Amount">
                        Amount
                    </label>
                    <br/>
                    <input  type="text" required placeholder="Amount" name="Amount"  />
                </div>
                <br/>
                <div >
                    <label  for="Payment Type">
                        Payment type
                    </label>
                    <br/>
                    <input type="text" required placeholder="Payment Type" name="Payment"  /> 
                </div>
                <br/>
                <div >
                    <label for="status">
                        Status
                    </label>
                    <br/>
                    <input type="text" required placeholder="Status" name="Status"  />  
                </div>
                 
                <br/>
                           
                <div class="">
                    <Link to="./Product.jsx">
                <button  type="submit"
                    
                   
                >
                   Post
                </button>
               </Link>
                </div>
                
                
            </form>
        </div>
    </div>  
 );
}
export default Post;