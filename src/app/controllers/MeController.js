const Item = require('../models/item');
const {
    mongooseToObject,
    multipleMongoseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/items
    storedItems(req, res, next) {
        Item.find({})
            .then((item) =>
                res.render('me/stored-items', {
                    item: multipleMongoseToObject(item),
                }),
            )
            .catch(next);
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new MeController();
