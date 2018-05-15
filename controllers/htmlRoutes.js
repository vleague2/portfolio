// NODE MODULES
const express = require('express');
const router = express.Router();

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.render('index');
})

// PAGE NOT FOUND
router.get('*', (req, res) => {
    res.render('error');
})

// EXPORT FOR SERVER
module.exports = router;