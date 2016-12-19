/**
 * Created by lsy on 16/12/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    post.find({}, function (err, docs) {
        if (err) {
            console.error(err);
            return
        }
        res.render('diary', { title: '你的日记', content: docs.reverse()});
    });
});

router.get('/content', function (req, res, next) {
    post.find({}, function (err, docs) {
        if (err) {
            console.error(err);
            return
        }
        res.json(docs.reverse());
    });
})



module.exports = router;
