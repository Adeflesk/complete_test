module.exports = function(grunt){
    //Before running npm install grunt-contrib-requirejs --save-dev
  require('load-grunt-tasks')(grunt, ['grunt-*']);

  var fileList = ['Gruntfile.js','app/js/**/*.js','spec/**/*.js'];

  grunt.initConfig({

      jshint: {
          options: {
              jshintrc: '.jshintrc'
          },
          all: fileList
      },

      clean: {
        dist: {

        } ,
        server: '.tmp'
      }


  });
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['clean:server']);
};
