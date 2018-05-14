module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // connect: {
    //   server: {
    //     options: {
    //       port: 1337,
    //       base: 'app'
    //     }
    //   }
    // },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'app/css/main.css': 'app/scss/main.scss'
        }
      }
    },
    jshint: {
      files: ['app/js/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['app/index.html']
      },
      js: {
        files: ['app/js/**/*.js'],
        tasks: ['jshint'],
      },
      sass: {
        options: {
          // Monitor Sass files for changes and compile them, but don't reload the browser.
          livereload: false,
        },
        files: ['app/scss/**/*.scss'],
        tasks: ['sass'],
      },
      css: {
        // LiveReload on the CSS files instead of their Sass source files and you get
        // the style to refresh without reloading the page in the browser.
        files: ['app/css/**/*.css'],
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'app/css/*.css',
            'app/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './app'
        }
      }
    }
  });

  // Actually running things.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);

};