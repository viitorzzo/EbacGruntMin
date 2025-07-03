module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/styles.css': 'src/styles.less'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/styles.min.css': ['dist/styles.css']
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/scripts.min.js': ['src/scripts.js']
                }
            }
        },

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

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
    grunt.registerTask('dev', ['watch']);
};
