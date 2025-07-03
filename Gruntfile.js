module.exports = function(grunt) {
  grunt.initConfig({
    // LESS para CSS
    less: {
      development: {
        files: {
          'dist/styles.css': 'src/styles.less'
        }
      }
    },

    // Minificação do CSS
    cssmin: {
      target: {
        files: {
          'dist/styles.min.css': ['dist/styles.css']
        }
      }
    },

    // Minificação JS
    uglify: {
      build: {
        src: 'src/scripts.js',
        dest: 'dist/scripts.min.js'
      }
    },

    // Watch
    watch: {
      styles: {
        files: ['src/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false,
        },
      },
      scripts: {
        files: ['src/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefa padrão
  grunt.registerTask('default', ['less', 'cssmin', 'uglify']);

  // Tarefa de desenvolvimento (watch)
  grunt.registerTask('dev', ['watch']);
};
