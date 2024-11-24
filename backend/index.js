import app from './app.js'
import dotenv from 'dotenv'
import connectDatabase from "./config/db.js"

// Handling Uncaught exceptions

process.on('uncaughtException', (err) => {
    console.error(`Uncaught Error: ${err.message}`);
    console.error(`Shutting down the server due to uncaught exception error`);

    server.close(() => {
        process.exit(1);
    });
});

//Config

dotenv.config({path: 'backend/config/config.env'})

// Connecting to Database

connectDatabase()


const server = app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

//Unhandled Promise Rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close( () => {
        process.exit(1);
    })
});