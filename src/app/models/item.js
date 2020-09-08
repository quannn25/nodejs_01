const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    name: { type: String, default: '0' },
    id: { type: String, default: '0' },
    total: { type: String, default: '0' },
    price: { type: String, default: '0' },
    image: { type: String },
});

module.exports = mongoose.model('item', Item);
