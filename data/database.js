(function(database){
    var mongodb = require(("mongodb"));
    var mongoUrl = "mongodb://localhost:27017/FootballFactory";
    var theDb = null;

    database.getDb = function(callback){
        if(!theDb){
            mongodb.MongoClient.connect(mongoUrl, function(err, db){
                if(err){
                    console.log("DB error");
                    callback(err,null);
                }
                else{
                    theDb = {
                        db: db,
                        clubs: db.collection("clubs"),
                        countries: db.collection("countries")
                    };
                    callback(null, theDb);
                }
            });
        }
        else{
            callback(null,theDb);
        }
    }

})(module.exports);