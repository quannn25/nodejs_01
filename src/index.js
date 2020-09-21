const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes/index');
const db = require('./config/db/index');

// connect to DB
db.connect();

// static file, file tĩnh thì vào hàm static kiểm tra thư mục đc truyền vào static (các file tĩnh trong thư mục 'public')
app.use(express.static(path.join(__dirname, 'public')));

// midleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// dùng cho PUT vì template ko có PUT
app.use(methodOverride('_method'));

// use custom middleWares
app.use(SortMiddleware);

//HTTP logger
//app.use(morgan('combined'))

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
