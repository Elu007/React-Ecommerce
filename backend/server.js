const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
const data = require('./products.json');

app.get("/api/products/:id", (req,res) =>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})