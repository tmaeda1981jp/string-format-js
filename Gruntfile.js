/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

module.exports = function(grunt) {

  'use strict';

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/format.spec.js']
      }
    },

    exec: {
      browserTest: {
        command: 'mocha-phantomjs test/specrunner.html'
      }
    },

    watch: {
      mochaTest: {
        files: ['format.js', 'test/format.spec.js'],
        tasks: ['mochaTest']
      },
      browserTest: {
        files: ['format.js', 'test/format.spec.js'],
        tasks: ['exec:browserTest']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
