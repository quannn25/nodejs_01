const newsRouter = require('./news');
const siteRouter = require('./site');
const itemsRouter = require('./items');
const meRouter = require('./me');

function route(app) {
    // trỏ vào newsRouter
    app.use('/news', newsRouter);

    app.use('/items', itemsRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
