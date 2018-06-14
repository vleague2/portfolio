// NODE MODULES
const express = require('express');
const router = express.Router();

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.render('index');
})

// in progress
// router.get('/project/novelize', (req, res) => {
//     res.render('project');
// })

// PAGE NOT FOUND
router.get('*', (req, res) => {
    res.render('error');
})

// EXPORT FOR SERVER
module.exports = router;