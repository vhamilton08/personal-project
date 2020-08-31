import React from 'react'

const Product = (props) => {
    console.log(props)
    return (
        
        <div>
            <div key={props.index}></div>
            <img alt='menu item' src={props.element.image}/>
            <h2>{props.element.name}</h2>
            <h3>${props.element.price}</h3>
        </div>
    )
}

export default Product