const express = require('express')
const mongoose = require('mongoose')
const app = express()
const DB_URL="mongodb://127.0.0.1:27017/Event_Attendance";

 app. use(express.json())
 app.use(express.urlencoded({extended: false}))

//routes
const ordersRoutes= require('./routes/orders.routes')
app.use("/orders",ordersRoutes)
const productsRoutes= require('./routes/products.routes')
app.use("/products",productsRoutes)
const reviewsRoutes= require('./routes/reviews.routes')
app.use("/reviews",reviewsRoutes) 
 

mongoose.set("strictQuery", false)

mongoose.connect(DB_URL);
const conn = mongoose.connection;
conn.once('open',()=>{
    console.log('connected to database');
})
conn.on('error',(error)=> {
        console.log(`failed to connect to database ${error.message}`);
})

app.listen (3002 , ()=> {
    console.log ('Server is running at port 3000');
}) 
