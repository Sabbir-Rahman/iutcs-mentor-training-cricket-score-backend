import { Router } from 'express';
import userController from '../controller/user.js'

const router = Router()

router.get('/user/view',userController.viewUsers)
router.post('/user/create',userController.addUser)

export default router