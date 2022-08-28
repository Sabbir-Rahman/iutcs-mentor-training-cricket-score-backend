import express from 'express'
import mongoose from 'mongoose'
import userModel  from './model/user.js'
import userRouter from './router/user.js'

const app = express()
const PORT = 5000
const CONNECTION_URL =
  'mongodb+srv://aziz:mongodbshikhbo@cluster0.u5tutmx.mongodb.net/iutcs-mentor?retryWrites=true&w=majority'

app.listen(PORT, (req,res)=> {
  console.log(`Server listening on ${PORT}`)
})

app.use('/',userRouter)

app.get('/home', (req,res)=> {
  res.json({ 'message': 'Welcome from cricket score'})
})



const connectDb = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Database Connected')
  } catch(err) {
    console.log("Database not connected", err)
  }
}
connectDb()