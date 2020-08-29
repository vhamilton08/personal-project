const bcrypt = require('bcryptjs')

module.exports = {
    getMenu: async (req, res) => {
        const db = req.app.get('db')
        const menu = await db.menu.get_menu()
        res.status(200).send(menu)
    }
}