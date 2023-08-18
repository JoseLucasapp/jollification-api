import 'dotenv/config'
import mongoose from "mongoose"

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/test').
    catch(error => console.log(error));