import { ErrMessage } from '../constant/index.js'
import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'
import { User } from '../models/index.js'

const login = async ({ email, password }) => {
  print('login successful', email, password)
  try {
    let findUser = await User.findOne({ email: email }).exec()
    if (findUser) {
      return findUser
    } else {
      throw new Exception(ErrMessage.COULD_FIND_USER)
    }
  } catch (err) {
    throw new Exception(ErrMessage.ERROR_OCCURRED)
  }
}

export default {
  login,
}
