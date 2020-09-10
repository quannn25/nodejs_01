const Item = require('../models/item');
const { mongooseToObject } = require('../../util/mongoose');

class ItemController {
    // [GET] /items/:slug
    show(req, res, next) {
        Item.findOne({ slug: req.params.slug })
            .then((item) =>
                res.render('items/show', { item: mongooseToObject(item) }),
            )

            .catch(next);
    }

    // [GET] /items/create
    create(req, res, next) {
        res.render('items/create');
    }

    // [POST] /items/store
    store(req, res, next) {
        const item = new Item(req.body);
        item.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new ItemController();
