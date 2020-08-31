import React, { useState } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import './Nav.css'
const Nav = (props) => {
    const {isLoggedIn} = props.userReducer


console.log(props)
    return(
        <div>
            <h1>Nav</h1>
         <a href='/'><img src='https://www.raisingcanes.com/sites/default/files/logo_raising_cane.png' alt='raising canes logo'/></a>
         {isLoggedIn ? 
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li onClick={props.logoutUser}><Link to='/'>Logout</Link></li>
            </ul> :
                <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/auth'>Login</Link></li>
                <li><Link to='/auth'>Sign Up</Link></li>
            </ul>}

        </div>
        )
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser})(withRouter(Nav))