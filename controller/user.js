import userModel from '../model/user.js'

async function addUser(req,res) {
  const user = {
    name: 'iutcs3',
    email: 'iutcs@gmail.com',
    phone: '012445888'
  }

  try {
    const newUser = await userModel.create(user)
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
  }
}

async function viewUsers(req,res) {
  try {
    const users = await userModel.find()
    res.status(201).json(users)
  } catch (err) {
    console.log(err)
  }
}

export default {
  addUser,
  viewUsers
}