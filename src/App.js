import React from 'react';
import routes from './routes'
import Nav from './components/Nav'
import {withRouter} from 'react-router-dom'
// import './components/Nav.css'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

function App(props) {
  const promise = loadStripe('pk_test_51HN3d6GO8vgBR7X5Rt5nMmQKjOtPuTKSAIYgaUmgnHthf061PXYw3bpj2pqoLadORjC3vPgZVeOostsgWMnP1psh00XlnTiDgQ')
  return(
      <div>
        {props.location.pathname !== '/auth' ?
        <Nav/> : null}
        <Elements stripe={promise}>
        {routes}
          
        </Elements>
      </div>
      

  )
}
export default withRouter(App);
