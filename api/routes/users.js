import express from 'express'
import { body, validationResult } from 'express-validator'
import { userController } from '../controllers/index.js'

const router = express.Router()

router.post('/login', userController.login)

router.get('/', (req, res) => {
  res.send('Get user')
})

export default router
