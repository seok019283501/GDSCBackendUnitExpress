const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const pageRouter = require('./routes/page');
const postRouter = require('./routes/post');
const app = express();

app.set('port',process.env.PORT || 8000);
app.set('view engine', 'html');
nunjucks.configure('views/html',{
    express:app,
    watch:true,
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/post',postRouter);
app.use('/',pageRouter);

app.use((req,res,next)=>{
    const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    err.status = 404;
    next(err);
});
app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NOSD_ENV !== 'production' ? err:{};
    // res.staus(err.status || 500);
    res.render('error');
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
})