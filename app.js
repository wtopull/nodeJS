var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port) //监听端口

console.log("my started on port" + port);

//配置路由

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: "首页"
    })
})
//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: "详情页"
    })
})
//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: "后台录入页"
    })
})
//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: "列表页"
    })
})