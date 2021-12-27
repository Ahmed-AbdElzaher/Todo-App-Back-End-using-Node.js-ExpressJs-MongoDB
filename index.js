const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');
const authMiddleware = require('./middlewares/auth')


mongoose.connect('mongodb://localhost:27017/NodeTest')


app.use(express.json());

app.use('/users', userRoutes)
app.use(authMiddleware)
app.use('/todos', todoRoutes)


app.use('*',(req, res, next) => {
    res.status(404).end()
})

app.use((err, req, res, next) => {
    res.status(500).json({err});
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})