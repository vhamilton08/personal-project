import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getCart} from '../redux/cartReducer'
import './Cart.scss'

const Cart = (props) => {
   

  useEffect(() => {
      props.getCart()
  }, [])
console.log(props)
return(
    <div className="cart-body">
        {/* <h1>Cart</h1> */}

            {props.cartReducer.cart.map(menu => {
                return (
                    <div className="item-container" key={menu.menu_id}>
                        <div className='items'>

                    <img src={menu.image}/>
                    <h2>{menu.name}</h2>
                    <small>${menu.price}</small>
                        </div>
                    </div>
                    )
                })}
        <div className="summary">
            
            <h2>total</h2>
            
         ${props.cartReducer.cart.reduce((acc, cur) => {
           return (acc += cur.quantity * +cur.price)
        }, 0)}
        </div>
            
          
        </div>
    )
}
        
            
const mapStateToProps = reduxState => {
    return { cartReducer: reduxState.cartReducer
}
}
export default connect(mapStateToProps, {getCart})(Cart)