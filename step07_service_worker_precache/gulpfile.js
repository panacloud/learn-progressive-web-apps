var gulp = require('gulp');

 var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'app';

gulp.task('generate-service-worker', function(callback) {
 

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('default', ['generate-service-worker'],  function() {
  // place code for your default task here
});