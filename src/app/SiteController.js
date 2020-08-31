class SiteController{

    // [GET] /
    index(req, res){
        res.render('home');
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

// 'module.exports' dùng cho khi require() thì trả về (new NewsController) là 1 thể hiện của NewsController
module.exports = new SiteController;