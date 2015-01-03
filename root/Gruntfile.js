'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // {{{ watch
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: ['scss/base.scss'],
                tasks: ['compass:dev']
            },
            other: {
                files: ['index.html', 'Gruntfile.js'],
                options: {
                    reload: true
                }
            }
        }, // }}}

        // {{{ compass
        compass: {
            options: {
                cssDir: "css",
                fontsDir: 'fonts',
                imagesDir: 'img',
                javascriptsDir: 'js',
                force: true,
                sassDir: "scss",
                require: ['susy']
            },
            dist: {
                options: {
                    environment: "production"
                }
            },
            dev: {
                options: {
                    environment: "development"
                }
            }
        },  // }}}

        // {{{ connect
        connect: {
            dev: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    base: '.',
                    middleware: function(connect, options) {
                        return [
                            function(req, res, next) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

                                // don't just call next() return it
                                return next();
                            },

                            // add other middlewares here
                            connect.static(require('path').resolve('.'))

                        ];
                    }
                }
            }
        } // }}}

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['connect', 'watch']);

};
