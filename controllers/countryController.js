(function(countryController){
    var countryData = require("../data/countries.js");
    
    countryController.init = function (app) {
        app.get("/country/:countryId", function (req, res) {
            var countryId = req.params.countryId;
            countryData.getCountry(countryId, function (err, results) {
                    res.set("Content-Type", "application/json");
                    res.send(results);
            });
        });

        app.get("/country/", function (req,res) {
            console.log("Showing all countries");
            countryData.getCountries(function (err, results) {
                res.set("Content-Type", "application/json");
                res.send(results);
            });
        });

        app.get("/deleteAllCountries", function (req,res) {
            console.log("deleteall start");
            countryData.deleteCountries(function (err, result) {
                console.log("deleteall is back: " + result);
                res.send(result);
            })
        });

        app.post("/country", function (req,res) {

            console.log("posting new country");
            var newCountry = {
                id: req.body.newId,
                name: req.body.name,
                threeLetterCode: req.body.threeLetterCode,
                twoLetterCode: req.body.twoLetterCode
            };

            console.log(newCountry);

            countryData.insertCountry(newCountry, function (err) {
                if (err) {
                    res.send(400, "Failed to add country to data store");
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(201, newCountry);
                }
            });
        });
    }
})(module.exports);
