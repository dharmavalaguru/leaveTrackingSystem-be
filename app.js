const express = require('express');
const app = express();
const PORT = 3000;

const manage = require('./routes/index')

app.use('/api/v1', manage)

app.listen(PORT, ()=>{
    console.log('Server is working on Port ', PORT)
})
