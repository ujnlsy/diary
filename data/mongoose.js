/**
 * Created by lsy on 16/12/13.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diary');

var diarySchema = new mongoose.Schema({
    content: {type: String, unique: true},
    date: String
}, {collection: 'post'});

var post = mongoose.model('post', diarySchema);

module.exports = post;