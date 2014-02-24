module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                files: {
                    'public/scripts/main.js': ['public/scripts/ng/**/*.js']
                },
                options: {
                    debug: true
                }
            },
            dist: {
                files: {
                    'public/scripts/main.js': ['public/scripts/ng/**/*.js']
                },
                options: {
                    debug: false
                }
            }
        },
        sass: {
            dev: {
                files: {
                    'public/styles/styles.css': 'scss/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev'],
                options: {
                    livereload:true
                }
            },
            scripts: {
                files: 'public/scripts/ng/**/*.js',
                tasks: ['browserify:dev'],
                options: {
                    livereload:true
                }
            }
        },
        uglify: {
            min: {
                files: {
                    'public/scripts/main.min.js': ['public/scripts/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['browserify:dev']);
    grunt.registerTask('min', ['browserify:dist', 'uglify:min']);
};