import React, { use, useContext } from 'react'
import './PlaceOder.css'
import { StoreContext } from '../../../context/StoreContext'

const PlaceOder = () => {

  
  const {getTotalCartAmount} = useContext(StoreContext);

 
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street' />
         <div className="multi-feilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
         <div className="multi-feilds">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
 <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
                <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOder
