import { body, validationResult } from "express-validator"
import {
    userRepo
} from "../repositories/index.js"
import HttpStatusCode from "../constant/HttpStatusCode.js"

const login = async (req, res) => {
        console.log(req.body);

        const errors = validationResult(req)
        if (!errors.isEmpty()) { // Có lỗi
            return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        console.log(email, password);

        //call repositories, due to get data from database so need to await
        let userLogin = await userRepo.login({ email, password })

        //..handle login
        res.status(HttpStatusCode.OK).json({
            message: 'Login successful',
            data: userLogin
        })
}

export default {
    login
}