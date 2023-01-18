const express = require('express');
const app = express();
const fs = require('fs');
const { stringify } = require('querystring');
const PORT = 3001;

console.log(`server started at http://localhost:${PORT}`);

app.use('/' ,express.json())

app.get('/' ,(req, res)=>{
    res.status(200).send('todo funciona')
})

app.post('/addCharacter', (req, res)=> {
    
    
    
    fs.appendFile('./character.json', JSON.stringify(req.body), () => {
        res.status(200).send(JSON.stringify(req.body))
    })
})

app.listen(3001);

let characters = [];