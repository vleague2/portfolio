// NODE MODULES
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// CONTROLLERS
const htmlRoutes = require ('./controllers/htmlRoutes.js');

// INITIALIZE EXPRESS
const app = express();

// SET UP HANDLEBARS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// STATIC CONTENT
app.use(express.static('public'));

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// CONTROLLER ASSIGNMENT
app.use('/', htmlRoutes);

// DEFAULT PORT
const PORT = process.env.PORT || 8080;

// START SERVER
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})