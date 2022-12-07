const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const PORT = 5002;
const app = express();

var sid='ACd8c3e21e8aa002e264762e2cb188129d';
var auth_token='eb6b3cd8761a70726af11564a5f36470';

var twilio = require('twilio')(sid,auth_token)


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))


app.get('/',(req,res)=>{
res.send('Home render phage')
})

app.get('/helloworld',(req,res)=>{

twilio.messages.create({
    from:"+15134509922",
    to:'+918722095453',
    body:`this is test message By : ${req.query["ID"]}`
}).then((res)=>{console.log('message sent',res)})
.catch((err)=>{
console.log('error ',err)
})

    res.send('hello word on Web live')
    console.log('helloword get api call')
    })
    

app.listen(PORT,()=>{
    console.log(`listining to port ${PORT}`)
})
