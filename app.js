const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const PORT = 5002;
const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))


app.get('/',(req,res)=>{
res.send('Home render phage')
})

app.get('/helloworld',(req,res)=>{
    res.send('hello word on Web live')
    console.log('helloword get api call')
    })
    

app.listen(PORT,()=>{
    console.log(`listining to port ${PORT}`)
})
