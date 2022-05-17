import { Link } from 'react-router-dom'
import './Product.css';
const data = [
  { trackingid: '1', product: "Giordani Gold Foundation", customer: "Odunayo", date: "14 May",amount: '10,500', paymentmethod: "Online Payment", status: "Approved" },
  { trackingid: '2', product: "Matte Lipstick", customer: "Prudence", date: "14 May",amount: '7,000', paymentmethod: "Online Payment", status: "Approved" },
  { trackingid: '3', product: "Power Face Powder", customer: "Esther", date: "14 May",amount: '5,500', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '4', product: "Novage Men Set", customer: "George", date: "15 May",amount: '35,500', paymentmethod: "Online Payment", status: "Pending" },
  { trackingid: '5', product: "North For Men Roll-on", customer: "Ariyo", date: "15 May",amount: '15,950', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '6', product: "The One Eyeliner", customer: "Esther", date: "15 May",amount: '5,000', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '7', product: "Eclat Style Parfum", customer: "Paul", date: "16 May",amount: '24,500', paymentmethod: "Online Payment", status: "Pending" },
  { trackingid: '8', product: "Novage SPF50", customer: "Rella", date: "16 May",amount: '12,000', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '9', product: "Love Nature Toner", customer: "Princess", date: "16 May",amount: '5,500', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '10', product: "Loving Care Lotion", customer: "James", date: "16 May",amount: '7,500', paymentmethod: "Online Payment", status: "Pending" },
  { trackingid: '11', product: "Signature Eau de Toilette", customer: "Geo", date: "16 May",amount: '17,000', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '12', product: "The One Mascara", customer: "Stark", date: "16 May",amount: '5,000', paymentmethod: "Online Payment", status: "Pending" },
  { trackingid: '13', product: "Eclat Style Parfum", customer: "Ariee", date: "17 May",amount: '24,500', paymentmethod: "Online Payment", status: "Approved" },
  { trackingid: '14', product: "Loving Nature Lotion", customer: "Sam", date: "17 May",amount: '6,500', paymentmethod: "Online Payment", status: "Pending" },
  { trackingid: '15', product: "Honey & milk Scrub", customer: "Layo", date: "17 May",amount: '8,500', paymentmethod: "Cash Payment", status: "Approved" },
  { trackingid: '16', product: "Loving Nature Aftershave", customer: "Prince", date: "17 May",amount: '4,500', paymentmethod: "Cash Payment", status: "Approved" },
  

]

function Product() {
  return (
    <div className="bg-gray-200">
      <div className='pt-6 ml-8'>
                <Link to="/dashboard">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                </Link>
        </div>
        <div className='md:absolute md:right-20 md:top-16'>
          <button className="bg-green-500 text-white py-2 px-4 font-semibold rounded-lg tracking-wider hover:bg-green-600 hover:scale-110 transition-all">Add New</button>
        </div>
          <div className='App'>
            <table className="">
              <tr>
                <th> ID </th>
                <th> Product </th>
                <th> Customer </th>
                <th> Date </th>
                <th> Amount </th>
                <th> Payment </th>
                <th> Status </th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr className="divide-x-2 divide-black border-b border-black" key={key}>
                    <td className='Tablecell'> { val.trackingid} </td>
                    <td  className='Tablecell bg-blue-200'> { val.product }</td>
                    <td  className='Tablecell bg-orange-200'> { val.customer } </td>
                    <td  className='Tablecell bg-red-200'> { val.date } </td>
                    <td  className='Tablecell bg-violet-200'> { val.amount } </td>
                    <td  className='Tablecell bg-green-300'> { val.paymentmethod } </td>
                    <td  className='Tablecell bg-gray-400 text-white'> { val.status } </td>
                    
                  </tr>
                )
              })}
            </table>
          </div>
    </div>
  );
}

export default Product;
