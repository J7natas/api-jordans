function routes(app){
    app.use('/jordans', require('./routes/jordans'))
    return;
}

module.exports = routes;