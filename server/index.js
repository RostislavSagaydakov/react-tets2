const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001
const {categories} = require('./data/categories')
const {products} = require('./data/products')

app.use(cors());
// Categories
app.get('/api/categories', (req, res) => {
    const { q, limit = 50, offset = 0, status = "active" } = req.query;
    let data = categories
    if (q && q.length > 2) {
        data = data.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    }
    if (status) {
        data = data.filter(item => item.status === status)
    }
    if (limit) {
        data = data.slice(offset, limit + offset);
    }
    res.send(data)
})
app.get("/api/categories/:name", (req, res) => {
    const { params } = req;
    const { name } = params;
    const foundCategory = categories.find((item) => item.name === name);
    if (!foundCategory) {
        return res.status(404).send(`Category with id ${name} is not exist`);
    }
    res.status(200).send(foundCategory);
});

// PRODUCTS
app.get("/api/products", (req, res) => {
    const { q, limit = null, offset = null, category = ""} = req.query;
    let data = products
    if (q && q.length > 2) {
        data = data.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    }
    if (limit) {
        data = data.slice(offset, limit + offset);
    }
    if (category) {
        const categories = category.split(",").map((c) => c.toLowerCase());
        data = data.filter((p) =>
            categories.includes(p.category.toLowerCase())
        );
    }

    res.send(data);
});
app.get("/api/products/:id", (req, res) => {
    const { body, params } = req;
    const { id } = params;

    const foundProduct = products.find((p) => p.id === +id);
    if (!foundProduct) {
        return res.status(400).send(`Product with id ${id} is not exist`);
    }

    res.status(200).send(foundProduct);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})