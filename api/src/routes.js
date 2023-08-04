const express = require('express');

const router = express.Router();

const motoboy = require('./controllers/motoboy.controller');
const cliente = require('./controllers/cliente.controller');

router.get('/', (req, res) => { return res.json("API Restaurante respondendo") });

router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);

module.exports = router;