function routes(app){
    app.use('/jordans', require('./routes/jordans.js'))
    return;
}

module.exports = routes;