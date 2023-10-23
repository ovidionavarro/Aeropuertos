require('dotenv').config();
const hbs=require('hbs');
const path=require('path');
const express = require('express')



const app = express()
app.use(express.json())
//midlewares
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials')
    //definiendo public como carpeta publica 
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('desde el app')
})
//pag principal
app.get('/users',(req,res)=>{
    res.render('users')
})
//llamando las rutas
app.use(require('./routers/users'))






app.listen(process.env.PORT,()=>{
    console.log(`server on port ${process.env.PORT}`);
})