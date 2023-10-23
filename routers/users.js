const express=require('express')
const router=express.Router();
//paginas de autenticacion de cada tipo de usuario

router.get('/users/cliente',(req,res)=>{
    res.render('users/cliente')
})
router.get('/users/mecanico',(req,res)=>{
    res.render('users/mecanico')
})
router.get('/users/admin',(req,res)=>{
    res.render('users/admin')
})
router.post('/users/admin',(req,res)=>{
    //console.log(req.body)
    res.send('ok')
})



module.exports=router