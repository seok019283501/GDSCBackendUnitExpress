const express = require('express');
// const multer = require('multer');
const {isCreateBorad,isDeleteBorad,isUpdateBorad} = require('../controllers/post');

const router = express.Router();


// router.post('/',isSignUp);
router.post('/board/create',isCreateBorad);
router.post('/board/delete',isDeleteBorad);
router.post('/board/update',isUpdateBorad);
module.exports = router;