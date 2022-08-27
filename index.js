import express from 'express'

const app = express()
const PORT = 5000

app.listen(PORT, (req,res)=> {
  console.log(`Server listening on ${PORT}`)
})

app.get('/', (req,res)=> {
  res.json({ 'message': 'Welcome from cricket score'})
})