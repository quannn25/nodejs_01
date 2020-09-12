const Item = require('../models/item');
const { mongooseToObject } = require('../../util/mongoose');
const item = require('../models/item');

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
    // [GET] /items/:id/edit
    edit(req, res, next) {
        Item.findById(req.params.id)
            .then((item) =>
                res.render('items/edit', { item: mongooseToObject(item) }),
            )
            .catch(next);
    }
    // [PUT] /items/:id
    update(req, res, next) {
        //req.body la update toan bo .body
        Item.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/items'))
            .catch(next);
    }

    // [DELETE] /items/:id
    delete(req, res, next) {
        Item.deleteOne({ _id: req.params.id })
            // 'back' la quay lai
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new ItemController();
