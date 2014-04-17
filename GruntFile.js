/**
 * GruntFile
 * @version 0.0.3
 */
module.exports = function(grunt) {

    // Load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        /**
        * Read package.json
        */
        pkg: grunt.file.readJSON('package.json'),

        // Default directories
        dir: {
            exams: 'exams',
            test: 'tests'
        },

        // Default options
        opts: {
            port: '2012'
        },

        /**
        * Set banner
        */
        banner: '/**\n' +
        '<%= pkg.title %> - <%= pkg.version %>\n' +
        '<%= pkg.homepage %>\n' +
        'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        'License: Enjoy. Live long and prosper.\n' +
        '*/\n',

        /**
        * JSHint
        * @github.com/gruntjs/grunt-contrib-jshint
        */
        jshint: {
          gruntfile: 'Gruntfile.js',
          files: ['<%= dir.js %>/**/*.js'],
          options: {
            jshintrc: '.jshintrc'
          }
        },

        // Server side unit tests
        mochacli: {
            options: {
                ui: "tdd",
                reporter: "spec",
                timeout: "15000"
            },

            unit: {
                src: ["static/js/tests/unit/**/*.js"]
            }
        },

        // The watch command watches a given set of files and runs a task when one of them changes.
        watch: {
            server: {
                files: ['.rebooted'],
                options: {
                    livereload: true
                }
            },

            scripts: {
                files: 'exams/**/*.js',
                options: {
                    livereload: true
                }
            }
        },

        open: {
            dev: {
              path: 'http://localhost:<%= opts.port %>',
              app: 'Google Chrome'
            }
        }
    });

    grunt.registerTask('server-start', 'Start test server', function() {
        var server = require('./test-server.js');

        server({
            port: 2012
        });
    });

    grunt.registerTask('test', ['server-start', 'watch']);
};
