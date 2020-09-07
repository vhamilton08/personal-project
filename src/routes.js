import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Auth from './components/Auth'
import Cart from './components/Cart'
import Home from './components/Home'
import Menu from './components/Menu'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/about' component={About}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/Menu' component={Menu}/>
    </Switch>
)