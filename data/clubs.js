(function (data) {

    var seedData = require("./seedData.js");
    var database = require("./database.js");

    data.getClubs = function (callback) {
        database.getDb(function (err, db) {
            if (err) {
                callback(err);
            } else {
                db.clubs.find().sort({name: 1}).toArray(function (err, results) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, results);
                    }
                });
            }
        });
    };

    data.getClub = function (clubId, callback) {
        database.getDb(function (err, db) {
            if (err) {
                callback(err);
            } else {
                db.clubs.find({id: parseInt(clubId)}).limit(1).toArray(function (err, results) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, results);
                    }
                });
            }
        });
    };

    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // test to see if data exists
                db.clubs.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve database count");
                    } else {
                        if (count == 0) {
                            console.log("Seeding the database with club data...");
                            seedData.initClubs.forEach(function (item) {
                                db.clubs.insert(item, function (err) {
                                    if (err) console.log("Failed to insert note into database");
                                });
                            });
                        } else {
                            console.log("Database already seeded with clubs");
                        }
                    }
                });
            }
        });
    }

    seedDatabase();

})(module.exports);
