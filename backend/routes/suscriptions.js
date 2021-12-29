const express = require('express');
const getAllSuscriptions = require('../controllers/suscriptions');

const router = express.Router();

router.get('/', (req, res) => {
  getAllSuscriptions(req, res);
});

module.exports = router;
