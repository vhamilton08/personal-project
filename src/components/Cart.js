import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../redux/cartReducer'
import {deleteItem} from '../redux/cartReducer'
import './Cart.scss'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const Cart = (props) => {
   
const onToken = (token) => {
token.card = void 0
axios.post('/api/payment', {token, amount: 100})
.then(res => {
    alert('Payment accepted')
})
}
  useEffect(() => {
      props.getCart()
  },[])
console.log(props)
console.log("CART", props.cartReducer.cart)
return(
    <div className="cart-body">
        {/* <h1>Cart</h1> */}
        {/* <button>CLEAR CART</button> */}

            {props.cartReducer.cart.reduce((acc, menu, index) => {
                const namesArr = acc.map(e => e.name)
                if(!namesArr.includes(menu.name)) {
                    acc.push(menu)
                    acc[acc.length - 1].quantity = 1
                } else {
                    acc[namesArr.findIndex((e) => e === menu.name)].quantity++
                }
                return acc
             }, []).
            map((menu, index) => {
                return (
                    <div className="item-container" key={index}>
                        <div className='items'>

                    <img src={menu.image} alt="product"/>
                    <h2>{menu.name}</h2>
                    <small>${menu.quantity * menu.price}</small>
                <h3>quantity{menu.quantity}</h3>
                    <button onClick={() => props.deleteItem(menu.menu_id)}>REMOVE</button>
                        </div>
                    </div>
                    )
                })}
        <div className="summary">
            
            <h2>total</h2>
           
         ${props.cartReducer.cart.reduce((acc, cur) => {
           return (acc += +cur.price)
        }, 0)}
        </div>
            {/* <StripeCheckout
            token={onToken}
            stripeKey={'pk_test_51HN3d6GO8vgBR7X5Rt5nMmQKjOtPuTKSAIYgaUmgnHthf061PXYw3bpj2pqoLadORjC3vPgZVeOostsgWMnP1psh00XlnTiDgQ'}
            amount={1000}
            /> */}
        </div>
    )
}
        
            
const mapStateToProps = reduxState => {
    return { cartReducer: reduxState.cartReducer
}
}
export default connect(mapStateToProps, {getCart, deleteItem})(Cart)