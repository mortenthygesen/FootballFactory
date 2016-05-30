(function (streams) {

    var fs = require("fs");
    var data = '';

    streams.demo = function () {

        //reading from streams
        var readerStream = fs.createReadStream('./demos/input.txt');
        readerStream.setEncoding("UTF8");

        readerStream.on("data", function (chunk) {
            data += chunk;
        });
        readerStream.on("end", function () {
            console.log("Data read: " + data);
        });
        readerStream.on("error", function (err) {
            console.log("reading data error: " + err.stack)
        });

        console.log("Reading streams ended");

        //Writing to streams
        var writerStream = fs.createWriteStream("./demos/output.txt");
        var outputData = "Simply Easy Learning!";

        writerStream.write(outputData, "UTF8");
        writerStream.end();

        writerStream.on("finish", function () {
            console.log("Finished writing to stream!");
        })
        writerStream.on("error", function (err) {
            console.log("Writing to stream error: "+ err.stack);
        })

        console.log("Writing to stream ended");


        //piping streams
        var readerStream = fs.createReadStream('./demos/input.txt');
        var writerStream = fs.createWriteStream("./demos/output.txt");
        readerStream.pipe(writerStream);
        console.log("Piping stream ended");


        //chaining streams / compressing files
        var zlib = require("zlib");
        fs.createReadStream('./demos/input.txt')
            .pipe(zlib.createGzip())
            .pipe(fs.createWriteStream('./demos/input.txt.gz'));

    }
})(module.exports);