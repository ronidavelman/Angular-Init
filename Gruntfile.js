module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files:{
          'Build/lib.min.js': 'Lib/*.js',
          'Build/modules.min.js': 'Modules/*/*.js'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files:{
          'Build/lib.min.css': 'Lib/*.css',
          'Build/modules.min.css': 'Modules/*/*.css'
        }
      }
    },
    watch: {
      scripts: {
        files: ['Modules/*/*.js','Modules/*/*.css','Modules/*/*.html'],
        tasks: ['cssmin', 'uglify'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  // Default task(s).
  grunt.registerTask('default', ['newer:uglify:build','cssmin', 'watch']);
};
