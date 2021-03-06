const Item = require('../models/item');
const {
    mongooseToObject,
    multipleMongoseToObject,
} = require('../../util/mongoose');
const item = require('../models/item');

class MeController {
    // [GET] /me/stored/items
    storedItems(req, res, next) {
        Promise.all([Item.find({}).sortable(req), Item.countDocumentsDeleted()])
            .then(([item, deletedCount]) =>
                res.render('me/stored-items', {
                    deletedCount,
                    item: multipleMongoseToObject(item),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/items
    trashItems(req, res, next) {
        Item.findDeleted({})
            .then((item) =>
                res.render('me/trash-items', {
                    item: multipleMongoseToObject(item),
                }),
            )
            .catch(next);
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new MeController();
