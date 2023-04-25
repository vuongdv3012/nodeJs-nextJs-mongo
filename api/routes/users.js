import express from "express"
import { body, validationResult } from "express-validator"
import {
    userController
} from "../controllers/index.js"

const router = express.Router()

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    userController.login
)

router.get('/', (req, res) => {
    res.send('Get user')
})

export default router