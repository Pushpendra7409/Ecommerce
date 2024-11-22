import app from './app.js'
import dotenv from 'dotenv'
import connectDatabase from "./config/db.js"

//Config

dotenv.config({path: 'backend/config/config.env'})

// Connect to Database

connectDatabase()


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})