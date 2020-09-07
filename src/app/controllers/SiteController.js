const Item = require('../models/item');
const { multipleMongoseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Item.find({})
            .then((items) => {
                res.render('home', { items: multipleMongoseToObject(items) });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new SiteController();
