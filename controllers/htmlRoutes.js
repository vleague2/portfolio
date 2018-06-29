// NODE MODULES
const express = require('express');
const router = express.Router();
const projects = require('./../data/projects.json');
const timeline_items = require("./../data/timelineItems.json")

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.render('index', {projects: projects, timelineItems: timeline_items});
})

// ROUTES FOR EACH PROJECT
router.get('/project/novelize', (req, res) => {
    res.render('project', {project: projects[0], notHome: true});
})

router.get('/project/lil-libs', (req, res) => {
    res.render('project', {project: projects[1], notHome: true});
})

router.get('/project/pet-finder', (req, res) => {
    res.render('project', {project: projects[2], notHome: true});
})

router.get('/project/project-move', (req, res) => {
    res.render('project', {project: projects[3], notHome: true});
})

router.get('/project/pusheen-game', (req, res) => {
    res.render('project', {project: projects[4], notHome: true});
})

// PAGE NOT FOUND
router.get('*', (req, res) => {
    res.render('error');
})

// EXPORT FOR SERVER
module.exports = router;