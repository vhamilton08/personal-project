import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Nav = (props) => {

const logout = () => {
    axios.post('/auth/logout')
    .then(res => {
        props.history.push('/')
    })
}
    return(
        <div>
            <h1>Nav</h1>
            <img src='https://www.raisingcanes.com/sites/default/files/logo_raising_cane.png' alt='raising canes logo'/> 
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li onClick={logout}><Link to='/'>Logout</Link></li>
            </ul>
        </div>
    )
}
export default withRouter(Nav)
