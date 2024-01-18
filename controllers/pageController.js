const {boradList,boradInfo} = require('../models/db');
exports.renderCreateBoard = async(req,res,next) => { 
    console.log(req.params.num != "create")
    if(req.params.num != "create"){
        const board = await boradInfo(req.params.num);
        console.log(board);
        // console.log(board[0])

        res.render('createBoard',{title: board.title, content:board.content, num : req.params.num});
    }else{
        res.render('createBoard',{num:req.params.num});
    }
}
exports.renderMain = async(req,res,next)=>{
    const list = await boradList();
    console.log(list);
    res.render('main',{boardList: list});
}
exports.renderBoard = async(req,res,next) => { 
    try{
        console.log(req.params.num);
        const board = await boradInfo(req.params.num);
        res.render('board',{title: board.title, content:board.content, num : req.params.num});
    }catch(err){
        console.error(err)
    }
}