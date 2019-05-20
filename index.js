let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let apiRoutes = require("./api-routes");

let app = express();

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/passangers",{ useNewUrlParser: true });
var db = mongoose.connection;

var port = process.env.PORT || 8080;

//Default Route
app.get('/', (req, res) => res.send('Hola Mundo con Express!'));
// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Servidor corriendo en puerto: " + port);
});