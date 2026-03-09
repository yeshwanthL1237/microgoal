
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const authRoutes = require('./routes/authRoutes')
const goalRoutes = require('./routes/goalRoutes')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use('/api/auth',authRoutes)
app.use('/api/goals',goalRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server running")
})
