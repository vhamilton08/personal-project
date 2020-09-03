require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env
const authCtrl = require('./controllers/authController')
const cartCtrl = require('./controllers/cartController')
const menuCtrl = require('./controllers/menuController')
const stripe = require('stripe')('pk_test_51HN3d6GO8vgBR7X5Rt5nMmQKjOtPuTKSAIYgaUmgnHthf061PXYw3bpj2pqoLadORjC3vPgZVeOostsgWMnP1psh00XlnTiDgQ')


const app = express()

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        }
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then((db) => {
    app.set('db', db)
    console.log('Db is online')
}).catch(err => console.log(`Database error: ${err}`))

app.post('/create-payment-intent', async (req, res) => {
    const {items} = req.body
    const paymentIntent = await stripe.paymentIntent.create({
        amount: calculateOrderAmount(items),
        currency: 'usd'
    })
    res.send({
        clientSecret: paymentIntent.client_secret
    })
})

//auth endpoints
app.get('/auth/user', authCtrl.getUser)
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)

// menu endpoints
app.get('/api/menu', menuCtrl.getMenu)
// app.post('/api/products', menuCtrl.addMenu)

//cart endpoints
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:id', cartCtrl.addToCart)
app.delete('/api/cart/:id', cartCtrl.deleteFromCart)
app.put('/api/cart/:id', cartCtrl.editCart)

app.listen(SERVER_PORT, () => console.log(`<-----Server Online----->`))