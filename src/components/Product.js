import React from 'react'
import './Product.scss'

const Product = (props) => {
    console.log(props)
    return (
<div className='product'>

        <div className='product'>
            <div key={props.index}></div>
            <img className='productimage' alt='menu item' src={props.element.image}/>
        </div>

            <h2>{props.element.name}</h2>
            <h3>${props.element.price}</h3>
</div>

    )
}

export default Product