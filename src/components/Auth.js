import React, { useState } from 'react'
import axios from 'axios'
import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Auth.scss'

const Auth = (props) => {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [toggle, setToggle] = useState(true)

    const usernameInputHandle = (e) => {
        setUsernameInput(e.target.value)
    }

    const passwordInputHandle = (e) => {
        setPasswordInput(e.target.value)
    }

    const register = () => {
        axios.post('/auth/register',
         {username: usernameInput, password: passwordInput})
         .then(res => {
             props.getUser()
             props.history.push('/')
         }).catch(err => console.log('username already exists'))
    }

    const login = () => {
        axios.post('/auth/login',
        {username: usernameInput, password: passwordInput})
        .then(res => {
            props.getUser()
            props.history.push('/')
        }).catch(err => console.log('please enter a valid username or password'))
    }
    return(
        <div>
            <header>

            <img src='https://www.raisingcanes.com/sites/default/files/logo_raising_cane.png' alt='raising-canes logo'/>
            <h1><Link to='/'>HOME</Link></h1>
            </header>
        <div className='auth'>

            <h1>{toggle ? "Login" : "Register"}</h1>
            <form className='authform'>
                <input name='username' placeholder='username' value={usernameInput} onChange={usernameInputHandle}/>
                <input name='password' placeholder='password' value={passwordInput} onChange={passwordInputHandle}/>
            </form>
            {toggle ? (
                // <>
                <div className='buttoncontainer'>

                <button className='loginbutton' onClick={login}>Login</button>
                <button className='switchbutton' onClick={() => {
                    setToggle(!toggle)
                }}>Need to Signup?</button>
                </div>
                // </>
                ) : (
                    // <>
                    <div className='buttoncontainer'>

                <button className='loginbutton' onClick={register}>Register</button>
                <button className='switchbutton' onClick={() => {
                    setToggle(!toggle)
                }}
                >already have an account?</button>
                </div>
                // </>
                )}
            
        </div>
            </div>
    )
}

export default connect(null, {getUser})(Auth)