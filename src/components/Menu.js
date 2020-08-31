import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

const Menu = (props) => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get('/api/menu')
        .then(res => {
            setMenu(res.data)
        }).catch(err => console.log(err))
    },[])

    console.log(menu)
    return(
        <div>
            <h1>This is the menu page</h1>
            {menu.map((el, index, array) => {
                return (
                    <Product
                    key={index}
                    element={el}/>

                )
            })}
        </div>
    )
}

export default Menu