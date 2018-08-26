var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port) //监听端口

console.log("my started on port" + port);

//配置路由

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: "首页",
        movies: [{
                title: "机械战警",
                _id: 1,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: "机械战警",
                _id: 2,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: "机械战警",
                _id: 3,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: "机械战警",
                _id: 4,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }
        ]
    })
})
//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: "详情页",
        movies: {
            title: "",
            doctor: "",
            country: "",
            year: "",
            poster: "",
            flash: "",
            summary: "",
            language: ""
        }
    })
})
//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: "后台录入页",
        movies: {
            title: "机械战警",
            doctor: "stan",
            country: "台湾",
            year: "2014",
            poster: "",
            flash: "http://static.youku.com/v20170518.0/v/swf/upsplayer/loader.swf?VideoIDS=XNA%3D%3D&embedid=MTEyLjIwNi4yMDUuMjM1AjECAg%3D%3D&wd=&winType=BDskin&cna=gQspE7wOAn8CAXDKNqDO2X9v&partnerid=0edbfd2e4fc91b72&vext=pid%253D0edbfd2e4fc91b72%2526emb%253DMTEyLjIwNi4yMDUuMjM1AjECAg%253D%253D%2526bc%253D%2526cna%253DgQspE7wOAn8CAXDKNqDO2X9v%2526vvlogext%253Dpc_i%25253D1521083770229AqJ%252526pc_u%25253D-%252526rvpvid%25253D-%252526rycid%25253D-%252526yvft%25253D1535288065000%252526vsidc%25253D1%252526seid%25253D15352880657562h0%252526vstp%25253D1%252526svstp%25253D1%2526type%253D0%2526embsig%253D1_1535288065_499d5a5f1d3a265b6e8652eef978538e",
            summary: "haaaahaaahaahaaaaahaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaa",
            language: "英语"
        }
    })
})
//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: "列表页",
        movies: [{
            title: "机械战警",
            _id: "1",
            doctor: "stan",
            country: "台湾",
            year: "2014",
            language: "英语",
            flash: "http://static.youku.com/v20170518.0/v/swf/upsplayer/loader.swf?VideoIDS=XNA%3D%3D&embedid=MTEyLjIwNi4yMDUuMjM1AjECAg%3D%3D&wd=&winType=BDskin&cna=gQspE7wOAn8CAXDKNqDO2X9v&partnerid=0edbfd2e4fc91b72&vext=pid%253D0edbfd2e4fc91b72%2526emb%253DMTEyLjIwNi4yMDUuMjM1AjECAg%253D%253D%2526bc%253D%2526cna%253DgQspE7wOAn8CAXDKNqDO2X9v%2526vvlogext%253Dpc_i%25253D1521083770229AqJ%252526pc_u%25253D-%252526rvpvid%25253D-%252526rycid%25253D-%252526yvft%25253D1535288065000%252526vsidc%25253D1%252526seid%25253D15352880657562h0%252526vstp%25253D1%252526svstp%25253D1%2526type%253D0%2526embsig%253D1_1535288065_499d5a5f1d3a265b6e8652eef978538e"
        }]
    })
})