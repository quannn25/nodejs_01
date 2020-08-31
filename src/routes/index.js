const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // trỏ vào newsRouter
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
