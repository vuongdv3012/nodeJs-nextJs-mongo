import { User } from "../models/index.js";

const login = async ({email, password}) => {
    console.log('login successful', email, password);
    try {
        let findUser = await User.findOne({email: email}).exec()
        if(findUser) {
            return findUser
        } else {
            throw new Error("Couldn't find user")
        }
    } catch (err) {
        console.log(err);
    }
}

export default {
    login,
}