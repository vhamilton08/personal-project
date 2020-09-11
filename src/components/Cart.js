import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../redux/cartReducer'
import {deleteItem} from '../redux/cartReducer'
import {editQuantity} from '../redux/cartReducer'
import './Cart.scss'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const Cart = (props) => {
//    const {quantity, setQuantity} = useState()
// const onToken = (token) => {
// token.card = void 0
// axios.post('/api/payment', {token, amount: 100})
// .then(res => {
//     alert('Payment accepted')
// })
// }
const [input, setInput] = useState({
    quantity: props.cartReducer.cart.quantity
})

const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  
const editQuantity = (menu_id, quantity) => {
    axios.put(`/api/cart/${menu_id}`, {quantity})
    .then(res => {
        setInput(res.data)
        props.editQuantity(res.data)
    }).catch(err => console.log(err))
}


  useEffect(() => {
      props.getCart()
  },[])


console.log(props)
console.log("CART", props.cartReducer.cart)
return(
    <div className="cart-body">

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
                // console.log("MENU", menu)
                return (
                    <div className="item-container" key={index}>
                        <div className='items'>

                    <img src={menu.image} alt="product"/>
                    <h2>{menu.name}</h2>
                    <small>${input.quantity * menu.price}</small>
                    {/* <h3>quantity{input.quantity}</h3> */}
                    <input name='quantity' value={input.quantity} onChange={handleChange} onKeyPress={() => editQuantity(menu.menu_id, input.quantity)} type='number'/>
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
export default connect(mapStateToProps, {getCart, deleteItem, editQuantity})(Cart)