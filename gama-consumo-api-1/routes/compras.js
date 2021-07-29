var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo')

/* POST criacao de compra. */
router.post('/', function(req, res, next) {
  cielo.compra(req.body).then((result) => {
    res.send(result);
  })
});

/* GET status de compra. */
router.get('/:compra_id/status', function(req, res, next) {
  res.send('Status...');
});

module.exports = router;
