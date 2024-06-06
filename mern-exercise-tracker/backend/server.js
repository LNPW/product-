const express= require("express")
const app= express()
const cors =require('cors')
const port = process.env.Port|| 5000
require('dotenv').config()
app.use(cors())
app.use(express.json())
const mongoose= require('mongoose')

const uri=process.env.ATLAS_URI
mongoose.connect(uri)
const connection= mongoose.connection
connection.once('open',()=>{
console.log("MongoDB database connection successfully")
})

const exercisesRouter= require('./routes/exercises')
const usersRouter= require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port,()=>{
   console.log(`Server Listening at http://localhost:${port}`)
})