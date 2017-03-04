'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./config');

const paths = config.paths;

// Start the server
gulp.task('serve', () => {
  process.env.port = config.env.port;

  const options = {
    script: paths.server.app,
    env: {
      port: config.env.port
    },
    watch: paths.server.base
  };

  return plugins.nodemon(options);
});

// List the available gulp tasks
gulp.task('help', plugins.taskListing);

// Default task
gulp.task('default', ['help']);
