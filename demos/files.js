(function (files) {

    var fs = require("fs");

    files.demo = function () {

        //reading file asynchronously
        fs.readFile("./demos/input.txt", function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Async read: " + data.toString());
        });

        //reading file synchronously
        var data = fs.readFileSync("./demos/input.txt");
        console.log("Sync read: " + data.toString());


        //opening file
        console.log("Opening files");
        fs.open("./demos/input.txt", 'r+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            console.log("File opened successfully!");
        });


        //getting file info
        console.log("Getting file info");
        fs.stat("./demos/input.txt", function (err, stats) {
            if (err) {
                return console.error(err);
            }
            console.log("File stats: " + stats);
            console.log("Checking file type");
            console.log("isFile ?: "+ stats.isFile());
            console.log("isDirectory ?: "+ stats.isDirectory());
        });
    }
})(module.exports);