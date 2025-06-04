const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

const PORT = process.env.PORT

connectDB();

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth',authRoutes)

const todoListRoutes = require('./routes/todoListRoutes');
app.use('/api/todo-list',todoListRoutes)

const subtodoListRoutes = require('./routes/subtodoRoutes')
app.use('/api/sub-todo',subtodoListRoutes)

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`app is listening on PORT ${PORT}`)
})
