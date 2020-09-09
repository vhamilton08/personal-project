import axios from 'axios'

const initialState = {
    cart: []

}

const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"
const EDIT_QUANTITY = "EDIT_QUANTITY"

export function getCart() {
    const cart = axios.get('/api/cart')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: GET_CART,
        payload: cart
    }
}

export function addToCart(menu_id) {
    const add = axios.post('/api/cart', {menu_id})
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: ADD_TO_CART,
        payload: add
        
    }
}

export function deleteItem(menu_id){
    const deleteItem = axios.delete('/api/cart', {menu_id})
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: DELETE_FROM_CART,
        payload: deleteItem
    }
}

export function editCart() {
    const edit = axios.push('/api/cart/:id')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: EDIT_QUANTITY,
        payload: edit
    }
}

export default  function cartReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_CART + "_REJECTED":
            return state;
        case GET_CART + "_FULFILLED":
            if(payload) {
                console.log(payload)
                return {...state, cart: payload};
           }  else return state;
        case GET_CART + "_PENDING":
            return state;

        case ADD_TO_CART + "_REJECTED":
            return state;
        case ADD_TO_CART + "_FULFILLED":
            return {...state, cart: payload, add:payload};
            
         case DELETE_FROM_CART + "_REJECTED":
                return state;
         case DELETE_FROM_CART + "_FULFILLED":
            return {...state, cart: payload, deleteItem: payload};
         default:
            return state;
    }
}