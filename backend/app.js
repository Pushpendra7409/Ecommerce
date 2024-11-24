import express from "express";

const app = express();

import errorMiddleware from './middleware/error.js'

app.use(express.json())

// Route Imports
import product from './routes/productRoute.js'

app.use("/api/v1",product);

// Middleware for Error Handling
app.use(errorMiddleware)


export default app;