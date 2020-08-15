const express = require('express');

const Category = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();

        return res.send({ categories });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading categories' });
    }
});

router.get('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);

        return res.send({ category });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading category' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        
        const category = await Category.create({ name });

        return res.send({ category });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new category' });
    }
});

router.put('/:categoryId', async (req, res) => {
    try {
        const { name } = req.body;
        
        const category = await Category.findByIdAndUpdate(req.params.categoryId, { 
            name
        }, { new: true });

        return res.send({ category });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating category' });
    }
});

router.delete('/:categoryId', async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.categoryId);

        return res.send("Removido");

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting category' });
    }
});

module.exports = (app) => app.use('/category', router);
