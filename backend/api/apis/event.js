const express = require('express');

const router = express.Router();
const eventCtrl = require('../ctrl/event');

router.get('/', (req, res) => {
  res.json({
    ok: 1,
    layer: 'event',
  });
});

router.get('/getdata', eventCtrl.getdata);
router.post('/postdata', eventCtrl.postdata);

router.get('/1', eventCtrl.getdata1);
router.get('/2', eventCtrl.getdata2);

router.get('/1/visitorList', eventCtrl.visitorList_1);

module.exports = router;
