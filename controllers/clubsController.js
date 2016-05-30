(function(clubController){
    var clubData = require("../data/clubs.js");

    clubController.init = function (app) {
        app.get("/club/:clubId", function (req, res) {
            var clubId = req.params.clubId;
            clubData.getClub(clubId, function (err, results) {
                res.set("Content-Type", "application/json");
                res.send(results);
            });
        });

        app.get("/club/", function (req,res) {
            clubData.getClubs(function (err, results) {
                res.set("Content-Type", "application/json");
                res.send(results);
            });
        });
    }
})(module.exports);