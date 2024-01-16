const express = require('express');
const router = express.Router();
const {renderMain,renderBoard,renderCreateBoard} = require('../controllers/page');

router.use((req,res,next)=>{

    next();
})
router.get('/board/create/:num',renderCreateBoard);
router.get('/board/:num',renderBoard);
router.get('/',renderMain);

module.exports = router;