const bcrypt = require('bcryptjs')

module.exports = {
    getCart: async (req, res) => {
        if(!req.session.user.user_id) {
            return res.status(400)
        }
        const {user_id} = req.session.user
        const db = req.app.get('db')
        const cart = await db.cart.get_cart(user_id)
        if(cart[0]) {
            return res.status(200).send(cart)
        } else {
            return res.status(500)
        }
     },
    
    addToCart: async (req, res) => {
      console.log(req.body.menu_id)
        // if(!req.body.menu_id || !req.session.user.user_id){
        //     return res.status(400)
        // }
        // const {quantity, menu_id} = req.body
        // const {user_id} = req.session.user
        // const db = req.app.get('db')
        // const cart = await db.cart.add_to_cart([user_id, menu_id, quantity])
        // res.status(200).send(cart)
        if (!req.body.menu_id || !req.session.user.user_id) {
            return res.status(400);
          }
        const db = req.app.get("db");
        let { menu_id } = req.body;
        let { user_id } = req.session.user;
      console.log(req.session.user)
    
        try {
          // let cart = await db.cart.get_cart([user_id]);
      
           let cart = await db.cart.add_to_cart([user_id, menu_id]);
            return res.status(200).send(cart);
          // }
        } catch (error) {
            console.log('error caught in addtocart', error)
          return res.sendStatus(500);
        }
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