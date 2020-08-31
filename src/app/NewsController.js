class NewsController{

    // [GET] /news
    index(req, res){
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('12333 show news')
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new NewsController;