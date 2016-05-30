
(function (controllers) {
    var countryController = require("./countryController");
    var clubController = require("./clubsController");

    controllers.init = function (app) {
        countryController.init(app);
        clubController.init(app);
    }
})(module.exports);