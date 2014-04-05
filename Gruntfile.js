var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    //Before running npm install grunt-contrib-requirejs --save-dev

    require('load-grunt-tasks')(grunt, ['grunt-*', '!grunt-template-jasmine-istanbul', '!grunt-template-jasmine-requirejs']);

    var fileList = ['Gruntfile.js', 'app/js/**/*.js', 'spec/**/*.js'];

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: fileList
        },

        clean: {
            dist: {

            },

            server: '.tmp'
        },

        connect: {
            test: {
                port: 8000

            }

        },
        jasmine: {
            all: {
                src: [
                    'app/js/**/*.js'
                ],
                options: {
                    host: 'http://127.0.0.1:8000/',
                    vendor: '',
                    specs: 'specs/**/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: 'bin/coverage',
                        template: require('grunt-template-jasmine-requirejs'),
                        templateOptions: {
                            requireConfig: {
                                baseUrl: './app/',
                                mainConfigFile: './app/js/main.js',
                                paths: {
                                  "jquery":  'app/bower_components/jquery/dist/jquery.js',
                                  "jasmine-jquery":  'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js'
                                }
                            }
                    }

                    }


                }
            }
        }


    });

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['connect', 'jasmine:all']);

};
