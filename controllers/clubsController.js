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

        app.get("/message/", function (req,res) {
                res.set("Content-Type", "application/json");
                res.send({ msg: "Hello, it's me. I was wondering if after all these years you'd like to meet "});
        });
    }
})(module.exports);