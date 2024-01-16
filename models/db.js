const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_SECRET,
    database: 'board',
    port:'3306',
    connectionLimit : 30,
})
exports.createBorad = async (body)=> {
    try{
        console.log(body)
        const conn = await pool.getConnection(async(conn) => conn);
        const {title,content} = body;
        // console.log(pwd)
        await conn.query(`insert into board (title,content) values ("${title}","${content}")`);
        conn.release();

    }catch(err){
        console.log(err);
    }
}
exports.deleteBorad = async (num)=> {
    try{
        const conn = await pool.getConnection(async(conn) => conn);
        await conn.query(`DELETE FROM board WHERE num="${num}"`);
        conn.release();
    }catch(err){
        console.log(err);
    }
}
exports.updateBorad = async (body)=> {
    try{
        console.log(body)
        const conn = await pool.getConnection(async(conn) => conn);
        const {title,content,num} = body;
        await conn.query(`UPDATE board SET title="${title}", content="${content}" WHERE num="${num}"`);
        conn.release();
    }catch(err){
        console.log(err);
    }
}
exports.boradList = async ()=> {
    try{
        const conn = await pool.getConnection(async(conn) => conn);
        const list = await conn.query(`SELECT num,title FROM board`);
        conn.release();

        return list[0];
    }catch(err){
        console.log(err);
    }
}
exports.boradInfo = async (num)=> {
    try{
        console.log(num)
        const conn = await pool.getConnection(async(conn) => conn);
        const board = await conn.query(`SELECT title,content FROM board where num = "${num}"`);
        // console.log(board)
        conn.release();

        return board[0][0];
    }catch(err){
        console.log(err);
    }
}