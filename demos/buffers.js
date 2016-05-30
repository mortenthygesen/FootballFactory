(function (buffers) {

    buffers.demo = function () {

        //writing to buffers
        buf = new Buffer(256);
        len = buf.write("Simply easy learning!");

        console.log("Octets written: " + len);

        //reading buffers
        buf = new Buffer(26);
        for (var i = 0; i < 26; i++) {
            buf[i] = i + 97;
        }

        console.log(buf.toString('ascii'));
        console.log(buf.toString('ascii', 0, 5));
        console.log(buf.toString('utf8', 0, 5));

        //buffers to json
        buf = new Buffer("Simply easy learning!");
        var json = buf.toJSON(buf);

        console.log(json);

        //concatenating buffers
        var buffer1 = new Buffer("tdt ");
        var buffer2 = new Buffer("Simply Easy Learning");
        var buffer3 = Buffer.concat([buffer1, buffer2]);
        console.log("Buffer3 content: " + buffer3.toString());

        //comparing buffers
        var buffer1 = new Buffer("ABC");
        var buffer2 = new Buffer("ABCD");
        var result = buffer1.compare(buffer2);
        if (result < 0) {
            console.log(buffer1 + " comes before " + buffer2);
        } else if (result == 0) {
            console.log(buffer1 + " is the same as " + buffer2);
        } else {
            console.log(buffer1 + " comes after " + buffer2);
        }

        //Copying buffers
        var buffer1 = new Buffer("ABC");
        var buffer2 = new Buffer(3);
        buffer1.copy(buffer2);
        console.log("buffer2 content after copying: " + buffer2.toString());

        //Slicing buffers
        var buffer1 = new Buffer("Simply Easy Learning!");
        var buffer2 = buffer1.slice(0, 11);
        console.log("buffer2 content after slicing: " + buffer2.toString());

        //Buffer length
        var buffer = new Buffer("Simply Easy Learning!");
        console.log("Buffer length: " + buffer.length);
        
    }
})(module.exports);