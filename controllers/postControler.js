const {createBorad,updateBorad,deleteBorad} = require('../models/db');

exports.isCreateBorad = async (req,res,next)=>{
    try{
        console.log(req.body);
        const board = await createBorad(req.body);
        console.log(board);
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}
exports.isUpdateBorad = async (req,res,next)=>{
    try{
        console.log(req.body);
        const board = await updateBorad(req.body);
        console.log(board);
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}
exports.isDeleteBorad = async (req,res,next)=>{
    try{
        console.log(req.body.num)
        await deleteBorad(req.body.num);
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}