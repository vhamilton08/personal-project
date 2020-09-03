import React, { useEffect } from 'react'
import './Product.scss'
import axios from 'axios'

const Product = (props) => {
    console.log(props)
useEffect(() => {
    axios.post('/api/cart/:id',)
})

    return (
<div className='product'>

        <div className='productpic'>
            <div key={props.index}></div>
            <img className='productimage' alt='menu item' src={props.element.image}/>
        </div>
        <div className='infocontainer'>

            <h2>{props.element.name}</h2>
            <h3>${props.element.price}</h3>
            <button className='cartbutton'>Add to Cart</button>
        </div>
</div>

    )
}

export default Product