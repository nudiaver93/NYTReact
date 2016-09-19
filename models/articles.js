const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
    }
});

const Articles = mongoose.model('Articles', ArticleSchema);
module.exports = Articles;