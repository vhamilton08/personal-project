import React from 'react'
import './Product.scss'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cartReducer'

const Product = (props) => {


console.log(props)
    return (
<div className='product'>

        <div className='productpic'>
            <div key={props.index}></div>
            <img className='productimage' alt='menu item' src={props.element.image}/>
        </div>
        <div className='infocontainer'>

            <h2>{props.element.name}</h2>
            <h3>${props.element.price}</h3>
            <button onClick={() => props.addToCart(props.element.menu_id)} className='cartbutton'>Add to Cart</button>
        </div>
</div>

    )
}

export default connect(null, {addToCart})(Product)