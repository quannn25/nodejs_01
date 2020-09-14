const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Item = new Schema(
    {
        name: { type: String, default: '0', required: true },
        id: { type: String, default: '0', required: true },
        total: { type: String, default: '0', required: true },
        price: { type: String, default: '0', required: true },
        image: { type: String, default: '0' },
        videoId: { type: String, default: '0' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Item.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
mongoose.plugin(slug);

module.exports = mongoose.model('item', Item);
