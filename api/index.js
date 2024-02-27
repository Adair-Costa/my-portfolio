const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./routes/userRoutes');

const corsOptions = {
    origin: 'http://localhost:5173',
};

const app = express();

// GLOBAL MIDDLEWARES
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use((req, res, next) => {
    console.log('Hi there from the server side 👨‍💻');
    next();
});

// ROUTES
app.use(userRouter);

// SERVER
module.exports = app;
