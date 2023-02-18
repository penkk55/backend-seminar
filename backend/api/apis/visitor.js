const express = require('express');

const router = express.Router();

const visitorCtrl = require('../ctrl/visitor');

router.get('/', (req, res) => {
  res.json({
    ok: 1,
    layer: 'visitor',
  });
});

router.get('/getdata', visitorCtrl.getdata);
router.post('/addNewVisitor', visitorCtrl.addNewVisitor);
module.exports = router;
