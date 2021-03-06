const bcrypt = require('bcryptjs')

module.exports = {
    getCart: async (req, res) => {
      const {user_id} = req.session.user
        if(!req.session.user.user_id) {
            return res.status(400)
        }
        const db = req.app.get('db')
        const cart = await db.cart.get_cart(user_id)
        if(cart[0]) {
            return res.status(200).send(cart)
        } else {
            return res.status(500)
        }
     },
    
    addToCart: async (req, res, next) => {
      console.log(req.body.menu_id)
      
        if (!req.body.menu_id || !req.session.user.user_id) {
            return res.sendStatus(400);
          }
        const db = req.app.get("db");
        let { menu_id } = req.body;
        let { user_id } = req.session.user;
      console.log(req.session.user)
    
        try {
        
           let cart = await db.cart.add_to_cart([user_id, menu_id]);
            return res.status(200).send(cart);
      
        } catch (error) {
            console.log('error caught in addtocart', error)
            next(error)
          return res.sendStatus(500);
        }
    },
    
    deleteFromCart: async (req, res) => {
        const {user_id} = req.session.user
        const { menu_id } = req.params
        const db = req.app.get('db')
        const cart = await db.cart.delete_from_cart([user_id, menu_id])
       return res.status(200).send(cart)
    },
    
    // deleteCart: async (req, res) => {
    //     const {id} =req.params
    //     const db = req.app.get('db')
    //     const cart = await db.cart.delete_cart([id])
    //     res.status(200).send(cart)
    // },
    
    editCart: async (req, res) => {
      const {menu_id} = req.params
    const {quantity} = req.body
    const {user_id} = req.session.user
    // if (!req.params.cart_id || !req.session.user.user_id) {
    //   return res.sendStatus(400);
    // }
  
    const db = req.app.get('db')
    const cart = await db.cart.edit_quantity([quantity, menu_id, user_id])
    console.log(cart)
    res.status(200).json(cart)
    }

}