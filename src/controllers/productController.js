const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Product = require('../models/Product');
const Category = require('../models/Category');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate([ 'category' ]);

        return res.send({ products });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading products' });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);

        return res.send({ product });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading product' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, price, amount, category } = req.body;

        console.log(category);
        
        const product = await Product.create({ name, price, amount, category });

        return res.send({ product });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new product' });
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const { name, price, amount, category } = req.body;
        
        const product = await Product.findByIdAndUpdate(req.params.productId, { 
            name, 
            price,
            amount,
            category
        }, { new: true });

        return res.send({ product });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating product' });
    }
});

router.delete('/:productId', async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.productId);

        return res.send("Removido");

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting product' });
    }
});

module.exports = (app) => app.use('/product', router);
