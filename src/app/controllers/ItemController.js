const Item = require('../models/item');
const { mongooseToObject } = require('../../util/mongoose');

class ItemController {
    // [GET] /item/:slug
    show(req, res, next) {
        Item.findOne({ slug: req.params.slug })
            .then((item) =>
                res.render('items/show', { item: mongooseToObject(item) }),
            )

            .catch(next);
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new ItemController();
