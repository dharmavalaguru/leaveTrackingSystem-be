const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server is working on Port ', PORT)
})

app.get('/', ()=>{
    console.log('Hey Im Get API call')
})