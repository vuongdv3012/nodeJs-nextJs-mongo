import mongoose from 'mongoose'
import { print, OutputType } from '../helpers/print.js'
import Exception from '../exceptions/Exception.js'
import { ErrMessage } from '../constant/index.js'

mongoose.set('strictQuery', true)

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    print('connect DB successfully', OutputType.SUCCESS)
  } catch (error) {
    const { code } = error
    if (code === 8000) {
      throw new Exception(ErrMessage.DB_ERROR.WRONG_DB_USERNAME_PASSWORD)
    } else if (code === 'ENOTFOUND') {
      throw new Exception(ErrMessage.DB_ERROR.WRONG_CONNECTION_STRING)
    }
    throw new Exception(ErrMessage.DB_ERROR.CANT_CONNECT_DB)
  }
}

export default connect
