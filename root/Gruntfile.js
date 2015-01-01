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
            html: {
                files: ['index.html'],
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
                    base: '.'
                }
            }
        } // }}}

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['connect', 'watch']);

};
