const express = require('express');
const router = express.Router(); // middleware router

router.use((req, res) => {
  res.json({ test: 'testing' });
});

module.exports = router;
