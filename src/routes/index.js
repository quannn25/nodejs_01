const newsRouter = require('./news');
const siteRouter = require('./site');
const itemsRouter = require('./items');

function route(app) {
    // trỏ vào newsRouter
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.use('/items', itemsRouter);
}

module.exports = route;
