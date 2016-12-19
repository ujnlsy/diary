/**
 * Created by lsy on 16/12/13.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('write', {title: '写日记', name: '开始书写'});
});

/* POST write page. */
router.post('/', function (req, res) {
    var content = req.body.content;
    var date = req.body.date;

    if (content && date) {
        var newPost = new post({
            content: content,
            date: date
        });

        newPost.save(function (err) {
            if (err) {
                console.error(err);
                return;
            }

            console.log('保存成功!');
            res.send(200);
        })
    }
});

module.exports = router;