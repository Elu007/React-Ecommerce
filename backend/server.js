const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json);
const data = require('./products.json');

app.get("/api/products/:id", (req,res) =>{
    res.sendStatus(200); // Sends a success status code (200)
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})