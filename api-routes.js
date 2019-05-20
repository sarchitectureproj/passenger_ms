// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'La API esta funcionando',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var passengerController = require('./passengerController');

// Contact routes
router.route('/passengers')
    .get(passengerController.index)
    .post(passengerController.new);

router.route('/passengers/:passenger_id')
    .get(passengerController.view)
    .patch(passengerController.update)
    .put(passengerController.update)
    .delete(passengerController.delete);

// Export API routes
module.exports = router;