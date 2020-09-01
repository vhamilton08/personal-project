import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import './Menu.scss'

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
        <div className='menucontainer'>
            <div className='food'>

            {menu.map((el, index, array) => {
                return (
                    <Product
                    key={index}
                    element={el}/>
                    
                    )
                })}
                </div>
        </div>
    )
}

export default Menu