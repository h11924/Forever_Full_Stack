import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRouter.js' // CHECK THIS
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

// API Endpoints - If these are missing, you get a 404
app.use('/api/user', userRouter)
app.use('/api/product', productRouter) // Enables /api/product/add
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter) // Enables /api/order/list

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on PORT : ' + port))