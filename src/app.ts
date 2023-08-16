import express from 'express'
import cors from 'cors'
import './database/connection'

const app = express()

app.use(express.json())
app.use(cors())

export default app