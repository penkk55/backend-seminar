const express = require('express');

const router = express.Router();
const event = require('./apis/event');
const visitor = require('./apis/visitor');

router.get('/', (req, res) => {
  res.json({
    ok: 1,
    layer: 'api',
  });
});

// router.use('/auth')
router.use('/event', event);
router.use('/visitor', visitor);
// router.use('/csv')

module.exports = router;
