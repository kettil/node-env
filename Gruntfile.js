'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files:   [
                '**/*.js',
                '!node_modules/**/*.js',
                '!test/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            scripts: {
                files:   [ '**/*.js', '!node_modules/**/*.js' ],
                tasks:   [ 'default' ],
                options: {
                    interrupt: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'jshint' ]);

};
