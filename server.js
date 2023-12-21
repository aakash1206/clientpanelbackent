import { config } from 'dotenv'
import express from 'express'
import { DBconnect } from './connectDb.js'
import { routes } from './routes/userRoutes.js'
import cors from "cors"

config()


const app = express()

// middlerwares
DBconnect()
app.use(express.json())
app.use(cors())


app.use("/client" ,routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})



