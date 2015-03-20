
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/sass/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },

      livereload: {
        options: { livereload: true },
        files: ['assets/css/*.css', 'assets/js/*.js', '*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['sass', 'watch']); 
};
