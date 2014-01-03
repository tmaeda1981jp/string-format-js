/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

module.exports = function(grunt) {

  'use strict';

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        options: {
          mangle: true,
          compress: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'format.min.js': ['format.js']
        }
      }
    },

    mochaTest: {
      test: {
        options: {
//          grep: '%d',
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
