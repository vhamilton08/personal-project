import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import './Nav.scss'

const Nav = (props) => {
    const {isLoggedIn} = props.userReducer


console.log(props)
    return(
        <header className="header">
            <div className='logocontainer'>
         <a href='/'><img className='logo' src='https://www.raisingcanes.com/sites/default/files/logo_raising_cane.png' alt='raising canes logo'/></a>
            </div>

         {isLoggedIn ? 
         <nav className='navbar'>

            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/cart'>cart</Link></li>
                <li onClick={props.logoutUser}><Link to='/'>Logout</Link></li>
            </ul> 
         </nav> :
         <nav className='navbar'>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/auth'>Login/Sign Up</Link></li>
            </ul>
         </nav>}
        </header>
        )
   }
    const mapStateToProps = reduxState => reduxState
    export default connect(mapStateToProps, {logoutUser})(withRouter(Nav))