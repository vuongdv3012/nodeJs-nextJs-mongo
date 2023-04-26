import { OutputType, print } from '../helpers/print.js'

export default class Exception extends Error {
  constructor(message) {
    super(message) //call constructor of parent class
    print(message, OutputType.ERROR)
  }
}
