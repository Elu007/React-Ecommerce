const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
const data = require('./products.json');

// API to get all product list at once
app.get("/api/products", (req, res) => {
    res.json(data);
})

// API to get a single product only
app.get('/api/products/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = data.find((product) => product.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})