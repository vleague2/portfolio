// NODE MODULES
const express = require('express');
const router = express.Router();
const projects = require('./../data/projects.json');
const timeline_items = require("./../data/timelineItems.json")

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.render('index', {projects: projects, timelineItems: timeline_items});
})

// in progress
router.get('/project/novelize', (req, res) => {
    res.render('project', {project: projects[0]});
})

router.get('/project/lil-libs', (req, res) => {
    res.render('project', {project: projects[1]});
})

router.get('/project/pet-finder', (req, res) => {
    res.render('project', {project: projects[2]});
})

router.get('/project/project-move', (req, res) => {
    res.render('project', {project: projects[3]});
})

// PAGE NOT FOUND
router.get('*', (req, res) => {
    res.render('error');
})

// EXPORT FOR SERVER
module.exports = router;