const express = require('express');
const app = express()
app.use(express.json())
// const router = express.Router();

app.set('view engine', 'ejs')

//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
app.get('/', function(req, res, next) {
    res.send('index page');
});

app.get('/create', function(req, res, next) {
    res.render('../views/create');
});
app.get('/read', function(req, res, next) {
    res.render('../views/read');
});
app.get('/update', function(req, res, next) {
    res.render('../views/update');
});
app.get('/delete', function(req, res, next) {
    res.render('../views/delete');
});


//모듈에 등록해야 web.js에서 app.use 함수를 통해서 사용 가능
module.exports = app;