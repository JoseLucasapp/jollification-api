import 'dotenv/config'
import mongoose from "mongoose"

mongoose.Promise = global.Promise

module.exports = mongoose.connect(process.env.MONGO_URL as string)