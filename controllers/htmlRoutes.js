// NODE MODULES
const express = require('express');
const router = express.Router();
const project_previews = require('./../data/projectpreviews.json');
const timeline_items = require("./../data/timelineItems.json")

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.render('index', {projects: project_previews, timelineItems: timeline_items});
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