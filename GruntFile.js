/**
 * GruntFile
 * @version 0.0.3
 */
module.exports = function(grunt) {

    // Define server port
    var port = 2012;

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
            tests: 'tests'
        },

        /**
        * JSHint
        * @github.com/gruntjs/grunt-contrib-jshint
        */
        jshint: {
            all: [
                '<%= dir.exams %>/**/*.js',
                '<%= dir.exams %>/**/*.js',
                'Gruntfile.js'
            ],
            options: {
              jshintrc: '.jshintrc'
            }
        },

        // Watch for changes in exam files and reload
        watch: {
            scripts: {
                files: 'exams/**/*.js',
                options: {
                    livereload: true
                }
            }
        },

        // Auto open browser window when event emitted
        open: {
            dev: {
                path: 'http://localhost:' + port,
                app: 'Google Chrome',
                options: {
                    openOn: 'serverListening'
                }
            }
        }
    });

    // Start server task
    grunt.registerTask('server-start', 'Start test server', function() {
        var server = require('./test-server.js');

        server({
            port: port
        });

        // Emit event to open browser window/tab
        grunt.event.emit('serverListening');
    });

    // Main exam task
    grunt.registerTask('test', ['open:dev', 'server-start', 'watch']);
};
