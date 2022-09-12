import contactRoute from './contact';

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to backend API serivce!');
    })
    app.use('/contact', contactRoute);
};
