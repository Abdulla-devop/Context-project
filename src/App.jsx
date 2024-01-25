import { createContext, useContext, useState } from 'react'
import './App.css'


// using context
const shopCtx = createContext(null);
function App() {
 const price = 100;
 const [cart , setcart] = useState(0);
 const [totalcost,settotalcost]=useState();
  return (
    //creating provider assinged values
    <>
     <shopCtx.Provider
    value={{ price,
    cart,
    setcart,
    totalcost,
    settotalcost}}>
<Product/>
</shopCtx.Provider> 

    </>
  )
}

export default App

function Product(){
  //using context
  const {price,cart,setcart,totalcost,settotalcost} = useContext(shopCtx)

  settotalcost(cart*price)
// calculating price
function PriceToPay(){
  settotalcost(cart*price),
  setcart(cart+1)
}
// decreasing price
function DecPrice(){
  setcart(cart-1)
  settotalcost(cart*price)
}
    return(
      // using cart to display 
        <div className='body'>
        
        <div className="card w-100  text-primary-content">
  <div className='innerbody'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD285GL4Ubg1UXUyI795ARG9K1O5o2PWMSQ&usqp=CAU" alt="Book"/>
        <div>
        <h2 className='title'>Rich Dad Poor Dad</h2>  
<p className='write'>Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. 
  It advocates the importance of financial literacy, financial independence 
  and building wealth</p>
  </div>
  <div className='btnbox'>
    <div className='boxes'>
  <p className='word'>{cart}</p>
  <button className="btn btn-primary w-5"onClick={()=>{PriceToPay()}} >Add</button>
  </div>
  </div>
  <div className='list'>
    <div className='remove'>
    <h3 >Price ${price}</h3>
    <span>
    <button className='word' onClick={()=>{DecPrice()}}>Remove</button>
    </span>
    </div>
  </div>
      </div> 
<div className='secondbody'>
          <hr/>
            <h4 className='write sub'>SUBTOTAL: <span>${totalcost}</span></h4>
        <h4 className='write sub'>SHIPPING:  <span>Free</span></h4>
        <h4 className='sub'>Total: <span>${totalcost}</span></h4>
        <h4 className='sub word'>Offer<span>Get Daily Cash Coupons</span></h4>
        </div>
</div>
      </div>

    )
}
