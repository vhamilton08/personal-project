const bcrypt = require('bcryptjs')

module.exports = {
    getCart: async (req, res) => {
        const db = req.app.get('db')
        const cart = await db.cart.get_cart()
        res.status(200).send(cart)
    },
    
    addToCart: async (req, res) => {
        const {quantity} = req.body
        const db = req.app.get('db')
        const cart = await db.cart.add_to_cart([quantity])
        res.status(200).send(cart)
    },
    
    deleteFromCart: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        const cart = await db.cart.delete_from_cart([id])
        res.status(200).send(cart)
    },
    
    deleteCart: async (req, res) => {
        const {id} =req.params
        const db = req.app.get('db')
        const cart = await db.cart.delete_cart([id])
        res.status(200).send(cart)
    },
    
    editCart: async (req, res) => {
    const {quantity} = req.body
    const {id} = req.params
    const db = req.app.get('db')
    const cart = await db.cart.edit_quantity(quantity)
    res.status(200).send(cart)
    }
    
}