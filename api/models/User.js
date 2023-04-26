import mongoose, { Schema, ObjectId } from 'mongoose'
import isEmail from 'validator/lib/isemail.js'

export default mongoose.model(
  'User',
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true, //not null
      validate: {
        validator: (value) => value.length > 10,
        message: 'Username must be at least 10 characters',
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isEmail,
        message: 'Email is incorrect format',
      },
    },
  })
)
