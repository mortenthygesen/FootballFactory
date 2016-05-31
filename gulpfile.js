/*
// Server Restart implementation 1
var gulp   = require( 'gulp' ),
    server = require( 'gulp-develop-server' );

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: './server.js' } );
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ './server.js' ], server.restart );
});

gulp.task( 'default', [ 'server:start','server:restart' ], function() {
    console.log("Server restarted");
});
*/

// Server Restart implementation 2
var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , jshint = require('gulp-jshint');

gulp.task('lint', function () {
    gulp.src('./*.js')
        .pipe(jshint())
});

gulp.task('develop', function () {
    nodemon({ script: 'server.js'
        , ext: 'html js vash'
        , ignore: ['ignored.js']
        , tasks: ['lint'] })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task( 'default', [ 'develop' ], function() {
    console.log("Server restarted");
});