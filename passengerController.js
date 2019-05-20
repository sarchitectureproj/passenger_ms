// Import contact model
Passenger = require('./passengerModel');

// Handle index actions
exports.index = function (req, res) {
    Passenger.get(function (err, passengers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: passengers
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var passenger = new Passenger();
    passenger.name = req.body.name ? req.body.name : passenger.name;
    passenger.age = req.body.age;
    passenger.gender = req.body.gender;
    passenger.email = req.body.email;
    passenger.phone_number = req.body.phone_number;
    passenger.birthdate = req.body.birthdate;
    passenger.occupation = req.body.occupation;
    passenger.nationality = req.body.nationality;
    passenger.native_language = req.body.native_language;

// save the contact and check for errors
    passenger.save(function (err) {
        if (err)
             res.json(err);

res.json({
            message: 'New contact created!',
            data: passenger
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Passenger.findById(req.params.passenger_id, function (err, passenger) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: passenger
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {

Passenger.findById(req.params.passenger_id, function (err, passenger) {
        if (err)
            res.send(err);

passenger.name = req.body.name ? req.body.name : passenger.name;
        passenger.age = req.body.age;
    	passenger.gender = req.body.gender;
        passenger.email = req.body.email;
        passenger.phone_number = req.body.phone_number;
        passenger.birthdate = req.body.birthdate;
        passenger.occupation = req.body.occupation;
        passenger.nationality = req.body.nationality;
        passenger.native_language = req.body.native_language;

// save the contact and check for errors
        passenger.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: passenger
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Passenger.remove({
        _id: req.params.passenger_id
    }, function (err, passenger) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};