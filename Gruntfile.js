/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

module.exports = function(grunt) {

  'use strict';

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      js: {
        files: ['*.js', 'test/**/*.js'],
        tasks: ['mochaTest']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
