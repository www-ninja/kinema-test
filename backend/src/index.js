const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes')(app);
app.use((err, req, res, next) => {
    const error = { ...err };
    error.message = err.message;

    // express validator errors
    if (Object.prototype.toString.call(err.message) === '[object Array]') {
        return res.status(error.statusCode).json({ error: { messages: error.message } });
    }

    return res.status(error.statusCode || 500).json({ error: { message: error.message } });
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});``