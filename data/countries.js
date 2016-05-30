(function (data) {

    var seedData = require("./seedData.js");
    var database = require("./database.js");

    data.getCountries = function (callback) {
        database.getDb(function (err, db) {
            if (err) {
                callback(err);
            } else {
                db.countries.find().sort({name: 1}).toArray(function (err, results) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, results);
                    }
                });
            }
        });
    };

    data.getCountry = function (countryId, callback) {
        database.getDb(function (err, db) {
            if (err) {
                callback(err);
            } else {
                db.countries.find({id: parseInt(countryId)}).limit(1).toArray(function (err, results) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, results);
                    }
                });
            }
        });
    };

    data.deleteCountries = function (callback) {
        database.getDb(function (err, db) {
            if (err) {
                callback(err, null);
            } else {
                db.countries.drop(function (err) {
                    console.log("drop err: " + err);
                });
                console.log("drop OK");
                callback(null, true);
            }

        })
    }

    data.insertCountry = function (country, callback) {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to access database: " + err);
            } else {
                db.countries.insert(country, function (err) {
                    if (err) {
                        callback(err);
                    }
                    else{
                        callback(null);
                    }
                })
            }
        })
    }


    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // test to see if data exists
                db.countries.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve database count");
                    } else {
                        if (count == 0) {
                            console.log("Seeding the Database...");
                            seedData.initCountries.forEach(function (item) {
                                db.countries.insert(item, function (err) {
                                    if (err) console.log("Failed to insert note into database");
                                });
                            });
                        } else {
                            console.log("Database already seeded with countries");
                        }
                    }
                });
            }
        });
    }

    seedDatabase();

})(module.exports);
